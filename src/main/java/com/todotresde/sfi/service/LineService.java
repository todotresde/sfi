package com.todotresde.sfi.service;

import com.todotresde.sfi.domain.Line;
import com.todotresde.sfi.domain.MOProduct;
import com.todotresde.sfi.domain.Tracer;
import com.todotresde.sfi.domain.WSConfiguration;
import com.todotresde.sfi.repository.LineRepository;
import com.todotresde.sfi.repository.WSConfigurationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.Random;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

/**
 * Service class for managing users.
 */
@Service
@Transactional
public class LineService {

    private final Logger log = LoggerFactory.getLogger(LineService.class);

    private final LineRepository lineRepository;
    private final WSConfigurationRepository wSConfigurationRepository;
    private final WSConfigurationService wSConfigurationService;

    public LineService(LineRepository lineRepository, WSConfigurationRepository wSConfigurationRepository, WSConfigurationService wSConfigurationService) {
        this.lineRepository = lineRepository;
        this.wSConfigurationRepository = wSConfigurationRepository;
        this.wSConfigurationService = wSConfigurationService;
    }

    public Line getBestLineForMOProduct(MOProduct mOProduct) {
        List<Line> lines = this.lineRepository.findAll();
        Line bestLine = null;
        Long time = new Long(999999999);

        for(Line line: lines){
            Long lineTime = this.getTimeForLine(line);
            if(lineTime < time){
                time = lineTime;
                bestLine = line;
            }
        }

        return bestLine;
    }

    public Long getTimeForLine(Line line) {
        return new Long(ThreadLocalRandom.current().nextInt(20, 100 ));
    }

    public void sendMOProduct(Line line, MOProduct mOProduct){
        List<WSConfiguration> wSConfigurations = this.wSConfigurationRepository.findByLineAndFirst(line.getId(), true);

        WSConfiguration bestWSConfiguration = null;
        Long time = new Long(999999999);

        for(WSConfiguration wSConfiguration: wSConfigurations){
            Long wSConfigurationTime = this.wSConfigurationService.getTime(wSConfiguration);
            if(wSConfigurationTime < time){
                time = wSConfigurationTime;
                bestWSConfiguration = wSConfiguration;
            }
        }

        Tracer tracer = new Tracer();
        tracer.setCode(UUID.randomUUID().toString());
        tracer.setInTime(Instant.now());
        tracer.setStatus(0);
        tracer.setWsConfiguration(bestWSConfiguration);
        tracer.setManufacturingOrder(mOProduct.getManufacturingOrder());
        tracer.setMoProduct(mOProduct);
        tracer.setLine(line);
        tracer.setWorkStation(bestWSConfiguration.getWorkStation());
        tracer.setNextWorkStation(bestWSConfiguration.getNextWorkStation());
        tracer.setPrevWorkStation(bestWSConfiguration.getPrevWorkStation());
    }
}

