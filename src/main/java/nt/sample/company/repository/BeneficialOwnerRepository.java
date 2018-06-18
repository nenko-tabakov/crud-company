package nt.sample.company.repository;

import nt.sample.company.model.BeneficialOwner;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "benf_owners", path = "benf_owners")
public interface BeneficialOwnerRepository extends PagingAndSortingRepository<BeneficialOwner, Long> {

}
