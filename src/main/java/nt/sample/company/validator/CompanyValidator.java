package nt.sample.company.validator;

import nt.sample.company.model.Company;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component("beforeCreateCompanyValidator")
public class CompanyValidator implements Validator {
    @Override
    public boolean supports(Class<?> clazz) {
        return Company.class.equals(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        Company company = (Company) target;

        if (isNullOrEmpty(company.getName())) {
            errors.rejectValue("name", "name.empty");
        }

        if (isNullOrEmpty(company.getAddress())) {
            errors.rejectValue("address", "address.empty");
        }

        if (isNullOrEmpty(company.getCity())) {
            errors.rejectValue("city", "city.empty");
        }

        if (isNullOrEmpty(company.getCountry())) {
            errors.rejectValue("country", "country.empty");
        }
    }

    private boolean isNullOrEmpty(String value) {
        return value == null || value.trim().isEmpty();
    }
}
