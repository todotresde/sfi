package com.todotresde.sfi.repository;

import com.todotresde.sfi.domain.PTAttribute;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the PTAttribute entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PTAttributeRepository extends JpaRepository<PTAttribute, Long> {

}
