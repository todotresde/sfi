package com.todotresde.sfi.repository;

import com.todotresde.sfi.domain.WSConfiguration;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the WSConfiguration entity.
 */
@SuppressWarnings("unused")
@Repository
public interface WSConfigurationRepository extends JpaRepository<WSConfiguration, Long> {
    @Query("select distinct ws_configuration from WSConfiguration ws_configuration left join fetch ws_configuration.supplyTypes left join fetch ws_configuration.employees")
    List<WSConfiguration> findAllWithEagerRelationships();

    @Query("select ws_configuration from WSConfiguration ws_configuration left join fetch ws_configuration.supplyTypes left join fetch ws_configuration.employees where ws_configuration.id =:id")
    WSConfiguration findOneWithEagerRelationships(@Param("id") Long id);

    @Query("select ws_configuration from WSConfiguration ws_configuration where ws_configuration.line = :lineId and ws_configuration.first = :first")
    List<WSConfiguration> findByLineAndFirst(@Param("lineId") Long id, @Param("first") Boolean first);
}
