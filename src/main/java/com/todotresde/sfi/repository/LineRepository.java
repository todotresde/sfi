package com.todotresde.sfi.repository;

import com.todotresde.sfi.domain.Line;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Line entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LineRepository extends JpaRepository<Line, Long> {

}
