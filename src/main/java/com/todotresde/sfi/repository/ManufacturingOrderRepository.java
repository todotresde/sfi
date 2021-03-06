package com.todotresde.sfi.repository;

import com.todotresde.sfi.domain.ManufacturingOrder;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the ManufacturingOrder entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ManufacturingOrderRepository extends JpaRepository<ManufacturingOrder, Long> {

}
