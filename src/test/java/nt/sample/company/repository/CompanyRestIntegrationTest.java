package nt.sample.company.repository;

import nt.sample.company.Application;
import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
@AutoConfigureMockMvc
public class CompanyRestIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    private static final String COMPANY_ENDPOINT = "/companies";

    private static final String COMPANY_CONTENT = "{\"name\" : \"My Cool Company\",\"address\" : \"Mayfair\", \"city\" : \"London\", \"country\" : \"UK\", \"phoneNumber\":\"4327892\"}";

    private static final String COMPANY_CONTENT_REQUIRED_FIELDS = "{\"name\" : \"My Cool Company\",\"address\" : \"Mayfair\", \"city\" : \"London\", \"country\" : \"UK\"}";

    private String companyLink;

    @Before
    public void setUp() throws Exception {
        companyLink = createValidCompany();
    }

    @Test
    public void testCreateCompanyInvalidParameters() throws Exception {
        createCompany("{\"name\" : \"invalid company\"}").andExpect(status().is4xxClientError());
    }

    @Test
    public void testCreateCompany() throws Exception {
        getCompanyDetails().andExpect(jsonPath("$.name", Matchers.is("My Cool Company")));
    }

    @Test
    public void testUpdateCompany() throws Exception {
        mockMvc.perform(patch(companyLink).contentType(MediaType.APPLICATION_JSON).content("{\"city\": \"Reading\"}")).andExpect(status().isNoContent());
        getCompanyDetails().andExpect(jsonPath("$.city", Matchers.is("Reading")));
    }

    @Test
    public void testFullUpdateCompany() throws Exception {
        mockMvc.perform(put(companyLink).contentType(MediaType.APPLICATION_JSON).content(COMPANY_CONTENT_REQUIRED_FIELDS)).andExpect(status().isNoContent());
        getCompanyDetails().andExpect(jsonPath("$.phoneNumber", Matchers.nullValue()));
    }

    @Test
    public void testDeleteCompany() throws Exception {
        mockMvc.perform(delete(companyLink)).andExpect(status().isNoContent());
        mockMvc.perform(get(companyLink)).andExpect(status().isNotFound());
    }

    @Test
    public void testAddBeneficialOwner() throws Exception {
        createValidCompany();

        final String firstOwner = "neta";
        addBeneficialOwner(firstOwner);
        assertAddedBeneficialOwner("$._embedded.benf_owners[0].name", firstOwner);

        final String secondOwner = "another one";
        addBeneficialOwner(secondOwner);
        assertAddedBeneficialOwner("$._embedded.benf_owners[1].name", secondOwner);
    }

    private void assertAddedBeneficialOwner(String jsonPath, String expectedValue) throws Exception {
        mockMvc.perform(get(companyLink+"/beneficialOwners")).andExpect(status().isOk()).andExpect(jsonPath(jsonPath, Matchers.is(expectedValue)));
    }

    private void addBeneficialOwner(String ownerName) throws Exception {
        String content = String.format("{\"name\" : \"%s\"}", ownerName);
        ResultActions resultActions = mockMvc.perform(post("/benf_owners").contentType(MediaType.APPLICATION_JSON).content(content)).andExpect(status().isCreated());
        String beneficialOwnerLink = getLocationHeader(resultActions);

        mockMvc.perform(put(beneficialOwnerLink+"/company").contentType("text/uri-list").content(companyLink)).andExpect(status().isNoContent());
    }

    private String getLocationHeader(ResultActions resultActions) {
        return resultActions.andReturn().getResponse().getHeader("Location");
    }

    private ResultActions listAllCompanies() throws Exception {
        return mockMvc.perform(get(COMPANY_ENDPOINT).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    private ResultActions getCompanyDetails() throws Exception {
        return mockMvc.perform(get(companyLink)).andExpect(status().isOk());
    }

    private String createValidCompany() throws Exception {
        return getLocationHeader(createCompany(COMPANY_CONTENT).andExpect(status().isCreated()));
    }

    private ResultActions createCompany(String content) throws Exception {
        return mockMvc.perform(post(COMPANY_ENDPOINT).contentType(MediaType.APPLICATION_JSON).content(content));
    }
}
