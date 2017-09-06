package com.todotresde.sfi.service;

import com.todotresde.sfi.domain.Line;
import com.todotresde.sfi.domain.MOProduct;
import com.todotresde.sfi.domain.ManufacturingOrder;
import com.todotresde.sfi.repository.MOProductRepository;
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
public class SchedulerService {

    private final Logger log = LoggerFactory.getLogger(SchedulerService.class);

    private final LineService lineService;

    public SchedulerService(LineService lineService) {
        this.lineService = lineService;
    }

    public void sendMOProduct(MOProduct mOProduct) {
        log.debug("Send manufacturingOrderProduct to build {}", mOProduct.getId());

        Line line = lineService.getBestLineForMOProduct(mOProduct);

        lineService.sendMOProduct(line, mOProduct);
    }
}

