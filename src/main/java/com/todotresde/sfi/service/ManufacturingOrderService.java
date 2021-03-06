package com.todotresde.sfi.service;

import com.todotresde.sfi.domain.MOProduct;
import com.todotresde.sfi.domain.ManufacturingOrder;
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
public class ManufacturingOrderService {

    private final Logger log = LoggerFactory.getLogger(ManufacturingOrderService.class);

    private final MOProductService mOProductService;
    private final SchedulerService schedulerService;
    private final ManufacturingOrderRepository manufacturingOrderRepository;

    public ManufacturingOrderService(MOProductService mOProductService, SchedulerService schedulerService, ManufacturingOrderRepository manufacturingOrderRepository) {
        this.mOProductService = mOProductService;
        this.schedulerService = schedulerService;
        this.manufacturingOrderRepository = manufacturingOrderRepository;
    }

    //TODO - Capture error in case of schedulerService.sendMOProduct fail
    public ManufacturingOrder send(Long id) {
        ManufacturingOrder manufacturingOrder = manufacturingOrderRepository.findOne(id);
        log.debug("Send manufacturingOrder to build {}", manufacturingOrder);

        List<MOProduct> mOProducts = this.mOProductService.getByManufacturingOrder(manufacturingOrder);

        for(MOProduct mOProduct: mOProducts){
            for(Integer count = 0; count < mOProduct.getQuantity(); count++){
                schedulerService.sendMOProduct(mOProduct);
            }
        }

        manufacturingOrder.setStatus(1);

        manufacturingOrderRepository.save(manufacturingOrder);

        return manufacturingOrder;
    }
}

