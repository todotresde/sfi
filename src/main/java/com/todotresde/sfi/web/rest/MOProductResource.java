package com.todotresde.sfi.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.todotresde.sfi.domain.MOProduct;

import com.todotresde.sfi.domain.ManufacturingOrder;
import com.todotresde.sfi.repository.MOProductRepository;
import com.todotresde.sfi.repository.ManufacturingOrderRepository;
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
 * REST controller for managing MOProduct.
 */
@RestController
@RequestMapping("/api")
public class MOProductResource {

    private final Logger log = LoggerFactory.getLogger(MOProductResource.class);

    private static final String ENTITY_NAME = "mOProduct";

    private final MOProductRepository mOProductRepository;
    private final ManufacturingOrderRepository manufacturingOrderRepository;

    public MOProductResource(MOProductRepository mOProductRepository, ManufacturingOrderRepository manufacturingOrderRepository) {
        this.mOProductRepository = mOProductRepository;
        this.manufacturingOrderRepository = manufacturingOrderRepository;
    }

    /**
     * POST  /m-o-products : Create a new mOProduct.
     *
     * @param mOProduct the mOProduct to create
     * @return the ResponseEntity with status 201 (Created) and with body the new mOProduct, or with status 400 (Bad Request) if the mOProduct has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/m-o-products")
    @Timed
    public ResponseEntity<MOProduct> createMOProduct(@Valid @RequestBody MOProduct mOProduct) throws URISyntaxException {
        log.debug("REST request to save MOProduct : {}", mOProduct);
        if (mOProduct.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new mOProduct cannot already have an ID")).body(null);
        }
        MOProduct result = mOProductRepository.save(mOProduct);
        return ResponseEntity.created(new URI("/api/m-o-products/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /m-o-products : Updates an existing mOProduct.
     *
     * @param mOProduct the mOProduct to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated mOProduct,
     * or with status 400 (Bad Request) if the mOProduct is not valid,
     * or with status 500 (Internal Server Error) if the mOProduct couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/m-o-products")
    @Timed
    public ResponseEntity<MOProduct> updateMOProduct(@Valid @RequestBody MOProduct mOProduct) throws URISyntaxException {
        log.debug("REST request to update MOProduct : {}", mOProduct);
        if (mOProduct.getId() == null) {
            return createMOProduct(mOProduct);
        }
        MOProduct result = mOProductRepository.save(mOProduct);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, mOProduct.getId().toString()))
            .body(result);
    }

    /**
     * GET  /m-o-products : get all the mOProducts.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of mOProducts in body
     */
    @GetMapping("/m-o-products")
    @Timed
    public List<MOProduct> getAllMOProducts() {
        log.debug("REST request to get all MOProducts");
        return mOProductRepository.findAll();
        }

    /**
     * GET  /m-o-products : get all the mOProducts by manufacturingOrder.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of mOProducts in body
     */
    @GetMapping("/m-o-products/manufacturingOrder/{id}")
    @Timed
    public List<MOProduct> getAllMOProductsByMO(@PathVariable Long id) {
        log.debug("REST request to get all MOProducts by MO");
        ManufacturingOrder manufacturingOrder = manufacturingOrderRepository.findOne(id);
        return mOProductRepository.findByManufacturingOrder(manufacturingOrder);
    }

    /**
     * GET  /m-o-products/:id : get the "id" mOProduct.
     *
     * @param id the id of the mOProduct to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the mOProduct, or with status 404 (Not Found)
     */
    @GetMapping("/m-o-products/{id}")
    @Timed
    public ResponseEntity<MOProduct> getMOProduct(@PathVariable Long id) {
        log.debug("REST request to get MOProduct : {}", id);
        MOProduct mOProduct = mOProductRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(mOProduct));
    }

    /**
     * DELETE  /m-o-products/:id : delete the "id" mOProduct.
     *
     * @param id the id of the mOProduct to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/m-o-products/{id}")
    @Timed
    public ResponseEntity<Void> deleteMOProduct(@PathVariable Long id) {
        log.debug("REST request to delete MOProduct : {}", id);
        mOProductRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
