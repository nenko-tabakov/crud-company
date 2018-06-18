package nt.sample.company.repository;

import nt.sample.company.model.BeneficialOwner;
import nt.sample.company.model.Company;
import org.junit.After;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import javax.validation.ConstraintViolationException;

@RunWith(SpringRunner.class)
@DataJpaTest
public class CompanyRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private CompanyRepository companyRepository;

    @Test(expected = ConstraintViolationException.class)
    public void testNonNullFields() {
        persist(createCompany());
    }

    @Test
    public void testAddBeneficialOwner() {
        Company company = createCompany();
        company.setAddress("Mayfair");
        company.setCity("London");
        company.setCountry("UK");

        final String beneficialOwnerName = "neta";
        BeneficialOwner beneficialOwner = new BeneficialOwner();
        beneficialOwner.setName(beneficialOwnerName);

        company.addBeneficialOwner(beneficialOwner);

        Assert.assertNotNull(beneficialOwner.getCompany());
        Assert.assertEquals(company, beneficialOwner.getCompany());

        persist(company);

        Company foundCompany = companyRepository.findAll().iterator().next();
        Assert.assertNotNull(foundCompany);

        BeneficialOwner foundBeneficialOwner = foundCompany.getBeneficialOwners().iterator().next();
        Assert.assertEquals(beneficialOwnerName, foundBeneficialOwner.getName());
        Assert.assertEquals(foundCompany.getName(), foundBeneficialOwner.getCompany().getName());

        companyRepository.deleteAll();
    }

    private void persist(Company company) {
        entityManager.persist(company);
        entityManager.flush();
    }

    private Company createCompany() {
        Company company = new Company();
        company.setName("My Cool Company");
        return company;
    }
}
