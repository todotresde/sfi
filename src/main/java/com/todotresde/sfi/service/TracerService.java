package com.todotresde.sfi.service;

import com.todotresde.sfi.domain.*;
import com.todotresde.sfi.repository.LineRepository;
import com.todotresde.sfi.repository.TracerRepository;
import com.todotresde.sfi.repository.WSConfigurationRepository;
import com.todotresde.sfi.repository.WorkStationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

/**
 * Service class for managing users.
 */
@Service
@Transactional
public class TracerService {

    private final Logger log = LoggerFactory.getLogger(TracerService.class);

    private final TracerRepository tracerRepository;
    private final WorkStationRepository workStationRepository;

    public TracerService(TracerRepository tracerRepository, WorkStationRepository workStationRepository) {
        this.tracerRepository = tracerRepository;
        this.workStationRepository = workStationRepository;
    }

    public void create(Line line, MOProduct mOProduct, WSConfiguration wSConfiguration){

        Tracer tracer = new Tracer();
        tracer.setCode(UUID.randomUUID().toString());
        tracer.setInTime(Instant.now());
        tracer.setStatus(0);
        tracer.setWsConfiguration(wSConfiguration);
        tracer.setManufacturingOrder(mOProduct.getManufacturingOrder());
        tracer.setMoProduct(mOProduct);
        tracer.setLine(line);
        tracer.setWorkStation(wSConfiguration.getWorkStation());
        tracer.setNextWorkStation(wSConfiguration.getNextWorkStation());
        tracer.setPrevWorkStation(wSConfiguration.getPrevWorkStation());

        tracerRepository.save(tracer);
    }

    public Tracer sendFromWorkStationIP(WSConfiguration wSConfiguration, String ip, Tracer tracer){
        WorkStation workStation = this.workStationRepository.findByIp(ip);

        //Validate WorkStation and Tracer
        Boolean validTrace = this.tracerRepository.findByWorkStationAndCode(workStation, tracer.getCode()) != null;

        if(validTrace){
            return this.moveNext(wSConfiguration, tracer);
        }

        return null;
    }

    public Tracer send(WSConfiguration wSConfiguration, Tracer tracer){
        //Validate WorkStation and Tracer
        Boolean validTrace = this.tracerRepository.findByWorkStationAndCode(tracer.getWorkStation(), tracer.getCode()) != null;

        if(validTrace){
            return this.moveNext(wSConfiguration, tracer);
        }

        return null;
    }

    public Tracer moveNext(WSConfiguration wSConfiguration, Tracer tracer){
        Tracer nextTracer = new Tracer();

        if(wSConfiguration != null) {

            nextTracer.setCode(tracer.getCode());
            nextTracer.setInTime(Instant.now());
            nextTracer.setStatus(0);
            nextTracer.setWsConfiguration(wSConfiguration);
            nextTracer.setManufacturingOrder(tracer.getManufacturingOrder());
            nextTracer.setMoProduct(tracer.getMoProduct());
            nextTracer.setLine(tracer.getLine());
            nextTracer.setWorkStation(wSConfiguration.getWorkStation());
            nextTracer.setNextWorkStation(wSConfiguration.getNextWorkStation());
            nextTracer.setPrevWorkStation(wSConfiguration.getPrevWorkStation());
            nextTracer.setPrevTracer(tracer);

            tracerRepository.save(nextTracer);
        }

        tracer.setStatus(1);
        tracer.setNextTracer(null);
        tracerRepository.save(tracer);

        return nextTracer;
    }

    public List<Tracer> getTracersForWorkStation(WorkStation workStation){
        return this.tracerRepository.findByWorkStationAndStatus(workStation,0);
    }
}

