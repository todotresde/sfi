import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { WSConfiguration } from './ws-configuration.model';
import { WSConfigurationPopupService } from './ws-configuration-popup.service';
import { WSConfigurationService } from './ws-configuration.service';
import { WorkStation, WorkStationService } from '../work-station';
import { SupplyType, SupplyTypeService } from '../supply-type';
import { Employee, EmployeeService } from '../employee';
import { Line, LineService } from '../line';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-ws-configuration-dialog',
    templateUrl: './ws-configuration-dialog.component.html'
})
export class WSConfigurationDialogComponent implements OnInit {

    wSConfiguration: WSConfiguration;
    isSaving: boolean;

    workstations: WorkStation[];

    supplytypes: SupplyType[];

    employees: Employee[];

    lines: Line[];

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private wSConfigurationService: WSConfigurationService,
        private workStationService: WorkStationService,
        private supplyTypeService: SupplyTypeService,
        private employeeService: EmployeeService,
        private lineService: LineService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.workStationService.query()
            .subscribe((res: ResponseWrapper) => { this.workstations = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.supplyTypeService.query()
            .subscribe((res: ResponseWrapper) => { this.supplytypes = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.employeeService.query()
            .subscribe((res: ResponseWrapper) => { this.employees = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.lineService.query()
            .subscribe((res: ResponseWrapper) => { this.lines = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.wSConfiguration.id !== undefined) {
            this.subscribeToSaveResponse(
                this.wSConfigurationService.update(this.wSConfiguration));
        } else {
            this.subscribeToSaveResponse(
                this.wSConfigurationService.create(this.wSConfiguration));
        }
    }

    private subscribeToSaveResponse(result: Observable<WSConfiguration>) {
        result.subscribe((res: WSConfiguration) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: WSConfiguration) {
        this.eventManager.broadcast({ name: 'wSConfigurationListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }

    trackWorkStationById(index: number, item: WorkStation) {
        return item.id;
    }

    trackSupplyTypeById(index: number, item: SupplyType) {
        return item.id;
    }

    trackEmployeeById(index: number, item: Employee) {
        return item.id;
    }

    trackLineById(index: number, item: Line) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}

@Component({
    selector: 'jhi-ws-configuration-popup',
    template: ''
})
export class WSConfigurationPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private wSConfigurationPopupService: WSConfigurationPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.wSConfigurationPopupService
                    .open(WSConfigurationDialogComponent as Component, params['id']);
            } else {
                this.wSConfigurationPopupService
                    .open(WSConfigurationDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
