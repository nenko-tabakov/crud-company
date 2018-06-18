package nt.sample.company.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

@Entity(name = "companies")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    private String name;

    @NotNull
    private String address;

    @NotNull
    private String city;

    @NotNull
    private String country;

    private String email;

    private String phoneNumber;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL, orphanRemoval = true)
    @NotNull
    private Collection<BeneficialOwner> beneficialOwners = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Collection<BeneficialOwner> getBeneficialOwners() {
        return Collections.unmodifiableCollection(beneficialOwners);
    }

    public void setBeneficialOwners(Collection<BeneficialOwner> beneficialOwners) {
        this.beneficialOwners = beneficialOwners;
    }

    public void addBeneficialOwner(BeneficialOwner beneficialOwner) {
        beneficialOwners.add(beneficialOwner);
        beneficialOwner.setCompany(this);
    }

    public void removeBeneficialOwner(BeneficialOwner beneficialOwner) {
        beneficialOwners.remove(beneficialOwner);
        beneficialOwner.setCompany(null);
    }
}
