import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Employee } from './employee.model';
import { EmployeePopupService } from './employee-popup.service';
import { EmployeeService } from './employee.service';
import { WSConfiguration, WSConfigurationService } from '../w-s-configuration';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-employee-dialog',
    templateUrl: './employee-dialog.component.html'
})
export class EmployeeDialogComponent implements OnInit {

    employee: Employee;
    isSaving: boolean;

    wsconfigurations: WSConfiguration[];

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private employeeService: EmployeeService,
        private wSConfigurationService: WSConfigurationService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.wSConfigurationService.query()
            .subscribe((res: ResponseWrapper) => { this.wsconfigurations = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.employee.id !== undefined) {
            this.subscribeToSaveResponse(
                this.employeeService.update(this.employee));
        } else {
            this.subscribeToSaveResponse(
                this.employeeService.create(this.employee));
        }
    }

    private subscribeToSaveResponse(result: Observable<Employee>) {
        result.subscribe((res: Employee) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Employee) {
        this.eventManager.broadcast({ name: 'employeeListModification', content: 'OK'});
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

    trackWSConfigurationById(index: number, item: WSConfiguration) {
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
    selector: 'jhi-employee-popup',
    template: ''
})
export class EmployeePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private employeePopupService: EmployeePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.employeePopupService
                    .open(EmployeeDialogComponent as Component, params['id']);
            } else {
                this.employeePopupService
                    .open(EmployeeDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
