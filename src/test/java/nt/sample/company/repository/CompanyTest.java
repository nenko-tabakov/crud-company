package nt.sample.company.repository;

import nt.sample.company.model.BeneficialOwner;
import nt.sample.company.model.Company;
import org.junit.Assert;
import org.junit.Test;

public class CompanyTest {

    @Test
    public void testAddBeneficialOwner() {
        Assert.assertEquals(1, createCompanyWithBeneficialOwner().getBeneficialOwners().size());
    }

    @Test
    public void testRemoveBeneficialOwner() {
        BeneficialOwner beneficialOwner = new BeneficialOwner();
        Company company = new Company();
        company.addBeneficialOwner(beneficialOwner);
        company.removeBeneficialOwner(beneficialOwner);

        Assert.assertTrue(company.getBeneficialOwners().isEmpty());
    }

    @Test(expected = UnsupportedOperationException.class)
    public void testGetAddBeneficialOwner() {
        Company company = createCompanyWithBeneficialOwner();
        company.getBeneficialOwners().add(new BeneficialOwner());
    }

    private Company createCompanyWithBeneficialOwner() {
        Company company = new Company();
        company.addBeneficialOwner(new BeneficialOwner());

        return company;
    }

}
