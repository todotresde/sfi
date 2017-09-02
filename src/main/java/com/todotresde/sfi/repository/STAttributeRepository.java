package com.todotresde.sfi.repository;

import com.todotresde.sfi.domain.STAttribute;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the STAttribute entity.
 */
@SuppressWarnings("unused")
@Repository
public interface STAttributeRepository extends JpaRepository<STAttribute, Long> {

}
