package com.todotresde.sfi.service;

import com.todotresde.sfi.domain.*;
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
    private final TracerService tracerService;

    public WSConfigurationService(WSConfigurationRepository wSConfigurationRepository, TracerService tracerService) {
        this.wSConfigurationRepository = wSConfigurationRepository;
        this.tracerService = tracerService;
    }

    public WSConfiguration getFirstWSConfigurationForLine(Line line){
        List<WSConfiguration> wSConfigurations = this.wSConfigurationRepository.findByLineAndFirst(line, true);

        WSConfiguration bestWSConfiguration = null;
        Long time = new Long(999999999);

        for(WSConfiguration wSConfiguration: wSConfigurations){
            Long wSConfigurationTime = this.getTime(wSConfiguration);
            if(wSConfigurationTime < time){
                time = wSConfigurationTime;
                bestWSConfiguration = wSConfiguration;
            }
        }

        return bestWSConfiguration;
    }


    public Long getTime(WSConfiguration wSConfiguration) {
        return new Long(ThreadLocalRandom.current().nextInt(20, 100 ));
    }

    public void create(WSConfiguration wSConfiguration, Line line, MOProduct mOProduct){
        this.tracerService.create(line, mOProduct, wSConfiguration);
    }

    public WSConfiguration getNextWSConfiguration(WSConfiguration wSConfiguration){
        List<WSConfiguration> wSConfigurations = this.wSConfigurationRepository.findByLineAndPrevWorkStation(wSConfiguration.getLine(), wSConfiguration.getWorkStation());

        return wSConfigurations.get(0);
    }
}

