package com.todotresde.sfi.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A MOProduct.
 */
@Entity
@Table(name = "mo_product")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class MOProduct implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "quantity")
    private Integer quantity;

    @OneToOne(optional = false)
    @NotNull
    @JoinColumn(unique = true)
    private ManufacturingOrder manufacturinOrder;

    @ManyToOne(optional = false)
    @NotNull
    private Product product;

    // jhipster-needle-entity-add-field - Jhipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public MOProduct quantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public ManufacturingOrder getManufacturinOrder() {
        return manufacturinOrder;
    }

    public MOProduct manufacturinOrder(ManufacturingOrder manufacturingOrder) {
        this.manufacturinOrder = manufacturingOrder;
        return this;
    }

    public void setManufacturinOrder(ManufacturingOrder manufacturingOrder) {
        this.manufacturinOrder = manufacturingOrder;
    }

    public Product getProduct() {
        return product;
    }

    public MOProduct product(Product product) {
        this.product = product;
        return this;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
    // jhipster-needle-entity-add-getters-setters - Jhipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        MOProduct mOProduct = (MOProduct) o;
        if (mOProduct.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), mOProduct.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "MOProduct{" +
            "id=" + getId() +
            ", quantity='" + getQuantity() + "'" +
            "}";
    }
}
