package com.todotresde.sfi.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A WSConfiguration.
 */
@Entity
@Table(name = "ws_configuration")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class WSConfiguration implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first")
    private Boolean first;

    @Column(name = "last")
    private Boolean last;

    @ManyToOne(optional = false)
    @NotNull
    private WorkStation workStation;

    @ManyToOne
    private WorkStation prevWorkStation;

    @ManyToOne
    private WorkStation nextWorkStation;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "wsconfiguration_supply_type",
               joinColumns = @JoinColumn(name="wsconfigurations_id", referencedColumnName="id"),
               inverseJoinColumns = @JoinColumn(name="supply_types_id", referencedColumnName="id"))
    private Set<SupplyType> supplyTypes = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "wsconfiguration_employee",
               joinColumns = @JoinColumn(name="wsconfigurations_id", referencedColumnName="id"),
               inverseJoinColumns = @JoinColumn(name="employees_id", referencedColumnName="id"))
    private Set<Employee> employees = new HashSet<>();

    @ManyToOne(optional = false)
    @NotNull
    private Line line;

    // jhipster-needle-entity-add-field - Jhipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean isFirst() {
        return first;
    }

    public WSConfiguration first(Boolean first) {
        this.first = first;
        return this;
    }

    public void setFirst(Boolean first) {
        this.first = first;
    }

    public Boolean isLast() {
        return last;
    }

    public WSConfiguration last(Boolean last) {
        this.last = last;
        return this;
    }

    public void setLast(Boolean last) {
        this.last = last;
    }

    public WorkStation getWorkStation() {
        return workStation;
    }

    public WSConfiguration workStation(WorkStation workStation) {
        this.workStation = workStation;
        return this;
    }

    public void setWorkStation(WorkStation workStation) {
        this.workStation = workStation;
    }

    public WorkStation getPrevWorkStation() {
        return prevWorkStation;
    }

    public WSConfiguration prevWorkStation(WorkStation workStation) {
        this.prevWorkStation = workStation;
        return this;
    }

    public void setPrevWorkStation(WorkStation workStation) {
        this.prevWorkStation = workStation;
    }

    public WorkStation getNextWorkStation() {
        return nextWorkStation;
    }

    public WSConfiguration nextWorkStation(WorkStation workStation) {
        this.nextWorkStation = workStation;
        return this;
    }

    public void setNextWorkStation(WorkStation workStation) {
        this.nextWorkStation = workStation;
    }

    public Set<SupplyType> getSupplyTypes() {
        return supplyTypes;
    }

    public WSConfiguration supplyTypes(Set<SupplyType> supplyTypes) {
        this.supplyTypes = supplyTypes;
        return this;
    }

    public WSConfiguration addSupplyType(SupplyType supplyType) {
        this.supplyTypes.add(supplyType);
        supplyType.getWsConfigurations().add(this);
        return this;
    }

    public WSConfiguration removeSupplyType(SupplyType supplyType) {
        this.supplyTypes.remove(supplyType);
        supplyType.getWsConfigurations().remove(this);
        return this;
    }

    public void setSupplyTypes(Set<SupplyType> supplyTypes) {
        this.supplyTypes = supplyTypes;
    }

    public Set<Employee> getEmployees() {
        return employees;
    }

    public WSConfiguration employees(Set<Employee> employees) {
        this.employees = employees;
        return this;
    }

    public WSConfiguration addEmployee(Employee employee) {
        this.employees.add(employee);
        employee.getWsConfigurations().add(this);
        return this;
    }

    public WSConfiguration removeEmployee(Employee employee) {
        this.employees.remove(employee);
        employee.getWsConfigurations().remove(this);
        return this;
    }

    public void setEmployees(Set<Employee> employees) {
        this.employees = employees;
    }

    public Line getLine() {
        return line;
    }

    public WSConfiguration line(Line line) {
        this.line = line;
        return this;
    }

    public void setLine(Line line) {
        this.line = line;
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
        WSConfiguration wSConfiguration = (WSConfiguration) o;
        if (wSConfiguration.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), wSConfiguration.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "WSConfiguration{" +
            "id=" + getId() +
            ", first='" + isFirst() + "'" +
            ", last='" + isLast() + "'" +
            "}";
    }
}
