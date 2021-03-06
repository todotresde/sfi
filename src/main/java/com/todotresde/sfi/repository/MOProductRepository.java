package com.todotresde.sfi.repository;

import com.todotresde.sfi.domain.MOProduct;
import com.todotresde.sfi.domain.ManufacturingOrder;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;

import java.util.List;


/**
 * Spring Data JPA repository for the MOProduct entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MOProductRepository extends JpaRepository<MOProduct, Long> {
    List<MOProduct> findByManufacturingOrder(ManufacturingOrder manufacturingOrder);
}
