import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { PTAttribute } from './pt-attribute.model';
import { PTAttributePopupService } from './pt-attribute-popup.service';
import { PTAttributeService } from './pt-attribute.service';
import { ProductType, ProductTypeService } from '../product-type';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-pt-attribute-dialog',
    templateUrl: './pt-attribute-dialog.component.html'
})
export class PTAttributeDialogComponent implements OnInit {

    pTAttribute: PTAttribute;
    isSaving: boolean;

    producttypes: ProductType[];

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private pTAttributeService: PTAttributeService,
        private productTypeService: ProductTypeService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.productTypeService.query()
            .subscribe((res: ResponseWrapper) => { this.producttypes = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.pTAttribute.id !== undefined) {
            this.subscribeToSaveResponse(
                this.pTAttributeService.update(this.pTAttribute));
        } else {
            this.subscribeToSaveResponse(
                this.pTAttributeService.create(this.pTAttribute));
        }
    }

    private subscribeToSaveResponse(result: Observable<PTAttribute>) {
        result.subscribe((res: PTAttribute) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: PTAttribute) {
        this.eventManager.broadcast({ name: 'pTAttributeListModification', content: 'OK'});
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

    trackProductTypeById(index: number, item: ProductType) {
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
    selector: 'jhi-pt-attribute-popup',
    template: ''
})
export class PTAttributePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private pTAttributePopupService: PTAttributePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.pTAttributePopupService
                    .open(PTAttributeDialogComponent as Component, params['id']);
            } else {
                this.pTAttributePopupService
                    .open(PTAttributeDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
