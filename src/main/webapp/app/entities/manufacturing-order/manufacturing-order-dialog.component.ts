import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ManufacturingOrder } from './manufacturing-order.model';
import { ManufacturingOrderPopupService } from './manufacturing-order-popup.service';
import { ManufacturingOrderService } from './manufacturing-order.service';

@Component({
    selector: 'jhi-manufacturing-order-dialog',
    templateUrl: './manufacturing-order-dialog.component.html'
})
export class ManufacturingOrderDialogComponent implements OnInit {

    manufacturingOrder: ManufacturingOrder;
    isSaving: boolean;
    dateDp: any;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private manufacturingOrderService: ManufacturingOrderService,
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
        if (this.manufacturingOrder.id !== undefined) {
            this.subscribeToSaveResponse(
                this.manufacturingOrderService.update(this.manufacturingOrder));
        } else {
            this.subscribeToSaveResponse(
                this.manufacturingOrderService.create(this.manufacturingOrder));
        }
    }

    private subscribeToSaveResponse(result: Observable<ManufacturingOrder>) {
        result.subscribe((res: ManufacturingOrder) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: ManufacturingOrder) {
        this.eventManager.broadcast({ name: 'manufacturingOrderListModification', content: 'OK'});
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
    selector: 'jhi-manufacturing-order-popup',
    template: ''
})
export class ManufacturingOrderPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private manufacturingOrderPopupService: ManufacturingOrderPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.manufacturingOrderPopupService
                    .open(ManufacturingOrderDialogComponent as Component, params['id']);
            } else {
                this.manufacturingOrderPopupService
                    .open(ManufacturingOrderDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
