import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { SupplyType } from './supply-type.model';
import { SupplyTypePopupService } from './supply-type-popup.service';
import { SupplyTypeService } from './supply-type.service';
import { STAttribute, STAttributeService } from '../s-t-attribute';
import { WSConfiguration, WSConfigurationService } from '../w-s-configuration';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-supply-type-dialog',
    templateUrl: './supply-type-dialog.component.html'
})
export class SupplyTypeDialogComponent implements OnInit {

    supplyType: SupplyType;
    isSaving: boolean;

    stattributes: STAttribute[];

    wsconfigurations: WSConfiguration[];

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private supplyTypeService: SupplyTypeService,
        private sTAttributeService: STAttributeService,
        private wSConfigurationService: WSConfigurationService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.sTAttributeService.query()
            .subscribe((res: ResponseWrapper) => { this.stattributes = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.wSConfigurationService.query()
            .subscribe((res: ResponseWrapper) => { this.wsconfigurations = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.supplyType.id !== undefined) {
            this.subscribeToSaveResponse(
                this.supplyTypeService.update(this.supplyType));
        } else {
            this.subscribeToSaveResponse(
                this.supplyTypeService.create(this.supplyType));
        }
    }

    private subscribeToSaveResponse(result: Observable<SupplyType>) {
        result.subscribe((res: SupplyType) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: SupplyType) {
        this.eventManager.broadcast({ name: 'supplyTypeListModification', content: 'OK'});
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

    trackSTAttributeById(index: number, item: STAttribute) {
        return item.id;
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
    selector: 'jhi-supply-type-popup',
    template: ''
})
export class SupplyTypePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private supplyTypePopupService: SupplyTypePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.supplyTypePopupService
                    .open(SupplyTypeDialogComponent as Component, params['id']);
            } else {
                this.supplyTypePopupService
                    .open(SupplyTypeDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
