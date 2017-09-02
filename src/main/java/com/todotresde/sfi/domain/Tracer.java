package com.todotresde.sfi.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Tracer.
 */
@Entity
@Table(name = "tracer")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Tracer implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "code", nullable = false)
    private String code;

    @Column(name = "in_time")
    private LocalDate inTime;

    @Column(name = "start_time")
    private LocalDate startTime;

    @Column(name = "end_time")
    private LocalDate endTime;

    @Column(name = "jhi_time")
    private Integer time;

    @Column(name = "status")
    private Integer status;

    @OneToOne(optional = false)
    @NotNull
    @JoinColumn(unique = true)
    private WSConfiguration wsConfiguration;

    @OneToOne(optional = false)
    @NotNull
    @JoinColumn(unique = true)
    private ManufacturingOrder manufacturingOrder;

    @OneToOne(optional = false)
    @NotNull
    @JoinColumn(unique = true)
    private MOProduct moProduct;

    @OneToOne(optional = false)
    @NotNull
    @JoinColumn(unique = true)
    private Line line;

    @OneToOne(optional = false)
    @NotNull
    @JoinColumn(unique = true)
    private WorkStation workStation;

    @OneToOne
    @JoinColumn(unique = true)
    private WorkStation prevWorkStation;

    @OneToOne
    @JoinColumn(unique = true)
    private WorkStation nextWorkStation;

    @OneToOne
    @JoinColumn(unique = true)
    private Tracer nextTracer;

    @OneToOne
    @JoinColumn(unique = true)
    private Tracer prevTracer;

    // jhipster-needle-entity-add-field - Jhipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public Tracer code(String code) {
        this.code = code;
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public LocalDate getInTime() {
        return inTime;
    }

    public Tracer inTime(LocalDate inTime) {
        this.inTime = inTime;
        return this;
    }

    public void setInTime(LocalDate inTime) {
        this.inTime = inTime;
    }

    public LocalDate getStartTime() {
        return startTime;
    }

    public Tracer startTime(LocalDate startTime) {
        this.startTime = startTime;
        return this;
    }

    public void setStartTime(LocalDate startTime) {
        this.startTime = startTime;
    }

    public LocalDate getEndTime() {
        return endTime;
    }

    public Tracer endTime(LocalDate endTime) {
        this.endTime = endTime;
        return this;
    }

    public void setEndTime(LocalDate endTime) {
        this.endTime = endTime;
    }

    public Integer getTime() {
        return time;
    }

    public Tracer time(Integer time) {
        this.time = time;
        return this;
    }

    public void setTime(Integer time) {
        this.time = time;
    }

    public Integer getStatus() {
        return status;
    }

    public Tracer status(Integer status) {
        this.status = status;
        return this;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public WSConfiguration getWsConfiguration() {
        return wsConfiguration;
    }

    public Tracer wsConfiguration(WSConfiguration wSConfiguration) {
        this.wsConfiguration = wSConfiguration;
        return this;
    }

    public void setWsConfiguration(WSConfiguration wSConfiguration) {
        this.wsConfiguration = wSConfiguration;
    }

    public ManufacturingOrder getManufacturingOrder() {
        return manufacturingOrder;
    }

    public Tracer manufacturingOrder(ManufacturingOrder manufacturingOrder) {
        this.manufacturingOrder = manufacturingOrder;
        return this;
    }

    public void setManufacturingOrder(ManufacturingOrder manufacturingOrder) {
        this.manufacturingOrder = manufacturingOrder;
    }

    public MOProduct getMoProduct() {
        return moProduct;
    }

    public Tracer moProduct(MOProduct mOProduct) {
        this.moProduct = mOProduct;
        return this;
    }

    public void setMoProduct(MOProduct mOProduct) {
        this.moProduct = mOProduct;
    }

    public Line getLine() {
        return line;
    }

    public Tracer line(Line line) {
        this.line = line;
        return this;
    }

    public void setLine(Line line) {
        this.line = line;
    }

    public WorkStation getWorkStation() {
        return workStation;
    }

    public Tracer workStation(WorkStation workStation) {
        this.workStation = workStation;
        return this;
    }

    public void setWorkStation(WorkStation workStation) {
        this.workStation = workStation;
    }

    public WorkStation getPrevWorkStation() {
        return prevWorkStation;
    }

    public Tracer prevWorkStation(WorkStation workStation) {
        this.prevWorkStation = workStation;
        return this;
    }

    public void setPrevWorkStation(WorkStation workStation) {
        this.prevWorkStation = workStation;
    }

    public WorkStation getNextWorkStation() {
        return nextWorkStation;
    }

    public Tracer nextWorkStation(WorkStation workStation) {
        this.nextWorkStation = workStation;
        return this;
    }

    public void setNextWorkStation(WorkStation workStation) {
        this.nextWorkStation = workStation;
    }

    public Tracer getNextTracer() {
        return nextTracer;
    }

    public Tracer nextTracer(Tracer tracer) {
        this.nextTracer = tracer;
        return this;
    }

    public void setNextTracer(Tracer tracer) {
        this.nextTracer = tracer;
    }

    public Tracer getPrevTracer() {
        return prevTracer;
    }

    public Tracer prevTracer(Tracer tracer) {
        this.prevTracer = tracer;
        return this;
    }

    public void setPrevTracer(Tracer tracer) {
        this.prevTracer = tracer;
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
        Tracer tracer = (Tracer) o;
        if (tracer.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), tracer.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Tracer{" +
            "id=" + getId() +
            ", code='" + getCode() + "'" +
            ", inTime='" + getInTime() + "'" +
            ", startTime='" + getStartTime() + "'" +
            ", endTime='" + getEndTime() + "'" +
            ", time='" + getTime() + "'" +
            ", status='" + getStatus() + "'" +
            "}";
    }
}
