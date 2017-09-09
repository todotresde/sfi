package com.todotresde.sfi.service;

import com.todotresde.sfi.domain.MOProduct;
import com.todotresde.sfi.domain.ManufacturingOrder;
import com.todotresde.sfi.repository.MOProductRepository;
import com.todotresde.sfi.repository.ManufacturingOrderRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service class for managing users.
 */
@Service
@Transactional
public class MOProductService {

    private final Logger log = LoggerFactory.getLogger(MOProductService.class);

    private final MOProductRepository mOProductRepository;

    public MOProductService(MOProductRepository mOProductRepository) {
        this.mOProductRepository = mOProductRepository;
    }

    public List<MOProduct> getByManufacturingOrder(ManufacturingOrder manufacturingOrder) {
        return this.mOProductRepository.findByManufacturingOrder(manufacturingOrder);
    }
}

