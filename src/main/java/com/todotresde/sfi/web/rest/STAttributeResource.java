package com.todotresde.sfi.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.todotresde.sfi.domain.STAttribute;

import com.todotresde.sfi.repository.STAttributeRepository;
import com.todotresde.sfi.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing STAttribute.
 */
@RestController
@RequestMapping("/api")
public class STAttributeResource {

    private final Logger log = LoggerFactory.getLogger(STAttributeResource.class);

    private static final String ENTITY_NAME = "sTAttribute";

    private final STAttributeRepository sTAttributeRepository;
    public STAttributeResource(STAttributeRepository sTAttributeRepository) {
        this.sTAttributeRepository = sTAttributeRepository;
    }

    /**
     * POST  /s-t-attributes : Create a new sTAttribute.
     *
     * @param sTAttribute the sTAttribute to create
     * @return the ResponseEntity with status 201 (Created) and with body the new sTAttribute, or with status 400 (Bad Request) if the sTAttribute has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/s-t-attributes")
    @Timed
    public ResponseEntity<STAttribute> createSTAttribute(@Valid @RequestBody STAttribute sTAttribute) throws URISyntaxException {
        log.debug("REST request to save STAttribute : {}", sTAttribute);
        if (sTAttribute.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new sTAttribute cannot already have an ID")).body(null);
        }
        STAttribute result = sTAttributeRepository.save(sTAttribute);
        return ResponseEntity.created(new URI("/api/s-t-attributes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /s-t-attributes : Updates an existing sTAttribute.
     *
     * @param sTAttribute the sTAttribute to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated sTAttribute,
     * or with status 400 (Bad Request) if the sTAttribute is not valid,
     * or with status 500 (Internal Server Error) if the sTAttribute couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/s-t-attributes")
    @Timed
    public ResponseEntity<STAttribute> updateSTAttribute(@Valid @RequestBody STAttribute sTAttribute) throws URISyntaxException {
        log.debug("REST request to update STAttribute : {}", sTAttribute);
        if (sTAttribute.getId() == null) {
            return createSTAttribute(sTAttribute);
        }
        STAttribute result = sTAttributeRepository.save(sTAttribute);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, sTAttribute.getId().toString()))
            .body(result);
    }

    /**
     * GET  /s-t-attributes : get all the sTAttributes.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of sTAttributes in body
     */
    @GetMapping("/s-t-attributes")
    @Timed
    public List<STAttribute> getAllSTAttributes() {
        log.debug("REST request to get all STAttributes");
        return sTAttributeRepository.findAll();
        }

    /**
     * GET  /s-t-attributes/:id : get the "id" sTAttribute.
     *
     * @param id the id of the sTAttribute to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the sTAttribute, or with status 404 (Not Found)
     */
    @GetMapping("/s-t-attributes/{id}")
    @Timed
    public ResponseEntity<STAttribute> getSTAttribute(@PathVariable Long id) {
        log.debug("REST request to get STAttribute : {}", id);
        STAttribute sTAttribute = sTAttributeRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(sTAttribute));
    }

    /**
     * DELETE  /s-t-attributes/:id : delete the "id" sTAttribute.
     *
     * @param id the id of the sTAttribute to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/s-t-attributes/{id}")
    @Timed
    public ResponseEntity<Void> deleteSTAttribute(@PathVariable Long id) {
        log.debug("REST request to delete STAttribute : {}", id);
        sTAttributeRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
