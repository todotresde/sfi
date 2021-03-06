package com.todotresde.sfi.repository;

import com.todotresde.sfi.domain.Supply;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Supply entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SupplyRepository extends JpaRepository<Supply, Long> {

}
