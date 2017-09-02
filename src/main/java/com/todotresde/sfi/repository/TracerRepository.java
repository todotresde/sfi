package com.todotresde.sfi.repository;

import com.todotresde.sfi.domain.Tracer;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Tracer entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TracerRepository extends JpaRepository<Tracer, Long> {

}
