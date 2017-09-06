package com.todotresde.sfi.service;

import com.todotresde.sfi.domain.MOProduct;
import com.todotresde.sfi.domain.ManufacturingOrder;
import com.todotresde.sfi.domain.WSConfiguration;
import com.todotresde.sfi.repository.MOProductRepository;
import com.todotresde.sfi.repository.WSConfigurationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

/**
 * Service class for managing users.
 */
@Service
@Transactional
public class WSConfigurationService {

    private final Logger log = LoggerFactory.getLogger(WSConfigurationService.class);

    private final WSConfigurationRepository wSConfigurationRepository;

    public WSConfigurationService(WSConfigurationRepository wSConfigurationRepository) {
        this.wSConfigurationRepository = wSConfigurationRepository;
    }

    public Long getTime(WSConfiguration wSConfiguration) {
        return new Long(ThreadLocalRandom.current().nextInt(20, 100 ));
    }
}

