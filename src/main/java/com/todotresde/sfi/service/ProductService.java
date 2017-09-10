package com.todotresde.sfi.service;

import com.todotresde.sfi.domain.*;
import com.todotresde.sfi.repository.LineRepository;
import com.todotresde.sfi.repository.ProductRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;

/**
 * Service class for managing users.
 */
@Service
@Transactional
public class ProductService {

    private final Logger log = LoggerFactory.getLogger(ProductService.class);

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<SupplyType> getSupplyTypes(Product product) {
        List<SupplyType> supplyTypes = new ArrayList<SupplyType>();

        for(Supply supply: product.getSupplies()){
            supplyTypes.add(supply.getSupplyType());
        }

        return supplyTypes;
    }

}

