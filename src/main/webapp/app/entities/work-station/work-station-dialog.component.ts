import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { WorkStation } from './work-station.model';
import { WorkStationPopupService } from './work-station-popup.service';
import { WorkStationService } from './work-station.service';

@Component({
    selector: 'jhi-work-station-dialog',
    templateUrl: './work-station-dialog.component.html'
})
export class WorkStationDialogComponent implements OnInit {

    workStation: WorkStation;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private workStationService: WorkStationService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.workStation.id !== undefined) {
            this.subscribeToSaveResponse(
                this.workStationService.update(this.workStation));
        } else {
            this.subscribeToSaveResponse(
                this.workStationService.create(this.workStation));
        }
    }

    private subscribeToSaveResponse(result: Observable<WorkStation>) {
        result.subscribe((res: WorkStation) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: WorkStation) {
        this.eventManager.broadcast({ name: 'workStationListModification', content: 'OK'});
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
}

@Component({
    selector: 'jhi-work-station-popup',
    template: ''
})
export class WorkStationPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private workStationPopupService: WorkStationPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.workStationPopupService
                    .open(WorkStationDialogComponent as Component, params['id']);
            } else {
                this.workStationPopupService
                    .open(WorkStationDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
