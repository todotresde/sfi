package com.todotresde.sfi.service;

import com.todotresde.sfi.domain.*;
import com.todotresde.sfi.repository.LineRepository;
import com.todotresde.sfi.repository.TracerRepository;
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
    private final WSConfigurationService wSConfigurationService;
    private final TracerService tracerService;

    public LineService(LineRepository lineRepository, WSConfigurationService wSConfigurationService, TracerService tracerService) {
        this.lineRepository = lineRepository;
        this.wSConfigurationService = wSConfigurationService;
        this.tracerService = tracerService;
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
        WSConfiguration wSConfiguration = this.wSConfigurationService.getFirstWSConfigurationForLine(line);
        this.wSConfigurationService.create(wSConfiguration, line, mOProduct);

    }

    public Tracer sendFromWorkStationIP(String ip, Tracer tracer){
        WSConfiguration nextWSConfiguration = this.getNextWSConfiguration(tracer.getWsConfiguration());
        return this.tracerService.sendFromWorkStationIP(nextWSConfiguration, ip, tracer);
    }

    public Tracer send(Tracer tracer){
        WSConfiguration nextWSConfiguration = this.getNextWSConfiguration(tracer.getWsConfiguration());
        return this.tracerService.send(nextWSConfiguration, tracer);
    }

    public WSConfiguration getNextWSConfiguration(WSConfiguration wSConfiguration){
        return this.wSConfigurationService.getNextWSConfiguration(wSConfiguration);
    }
}

