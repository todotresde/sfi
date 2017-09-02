import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Tracer } from './tracer.model';
import { TracerPopupService } from './tracer-popup.service';
import { TracerService } from './tracer.service';
import { WSConfiguration, WSConfigurationService } from '../w-s-configuration';
import { ManufacturingOrder, ManufacturingOrderService } from '../manufacturing-order';
import { MOProduct, MOProductService } from '../m-o-product';
import { Line, LineService } from '../line';
import { WorkStation, WorkStationService } from '../work-station';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-tracer-dialog',
    templateUrl: './tracer-dialog.component.html'
})
export class TracerDialogComponent implements OnInit {

    tracer: Tracer;
    isSaving: boolean;

    wsconfigurations: WSConfiguration[];

    manufacturingorders: ManufacturingOrder[];

    moproducts: MOProduct[];

    lines: Line[];

    workstations: WorkStation[];

    prevworkstations: WorkStation[];

    nextworkstations: WorkStation[];

    nexttracers: Tracer[];

    prevtracers: Tracer[];
    inTimeDp: any;
    startTimeDp: any;
    endTimeDp: any;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private tracerService: TracerService,
        private wSConfigurationService: WSConfigurationService,
        private manufacturingOrderService: ManufacturingOrderService,
        private mOProductService: MOProductService,
        private lineService: LineService,
        private workStationService: WorkStationService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.wSConfigurationService
            .query({filter: 'tracer-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.tracer.wsConfiguration || !this.tracer.wsConfiguration.id) {
                    this.wsconfigurations = res.json;
                } else {
                    this.wSConfigurationService
                        .find(this.tracer.wsConfiguration.id)
                        .subscribe((subRes: WSConfiguration) => {
                            this.wsconfigurations = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
        this.manufacturingOrderService
            .query({filter: 'tracer-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.tracer.manufacturingOrder || !this.tracer.manufacturingOrder.id) {
                    this.manufacturingorders = res.json;
                } else {
                    this.manufacturingOrderService
                        .find(this.tracer.manufacturingOrder.id)
                        .subscribe((subRes: ManufacturingOrder) => {
                            this.manufacturingorders = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
        this.mOProductService
            .query({filter: 'tracer-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.tracer.moProduct || !this.tracer.moProduct.id) {
                    this.moproducts = res.json;
                } else {
                    this.mOProductService
                        .find(this.tracer.moProduct.id)
                        .subscribe((subRes: MOProduct) => {
                            this.moproducts = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
        this.lineService
            .query({filter: 'tracer-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.tracer.line || !this.tracer.line.id) {
                    this.lines = res.json;
                } else {
                    this.lineService
                        .find(this.tracer.line.id)
                        .subscribe((subRes: Line) => {
                            this.lines = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
        this.workStationService
            .query({filter: 'tracer-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.tracer.workStation || !this.tracer.workStation.id) {
                    this.workstations = res.json;
                } else {
                    this.workStationService
                        .find(this.tracer.workStation.id)
                        .subscribe((subRes: WorkStation) => {
                            this.workstations = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
        this.workStationService
            .query({filter: 'tracer-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.tracer.prevWorkStation || !this.tracer.prevWorkStation.id) {
                    this.prevworkstations = res.json;
                } else {
                    this.workStationService
                        .find(this.tracer.prevWorkStation.id)
                        .subscribe((subRes: WorkStation) => {
                            this.prevworkstations = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
        this.workStationService
            .query({filter: 'tracer-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.tracer.nextWorkStation || !this.tracer.nextWorkStation.id) {
                    this.nextworkstations = res.json;
                } else {
                    this.workStationService
                        .find(this.tracer.nextWorkStation.id)
                        .subscribe((subRes: WorkStation) => {
                            this.nextworkstations = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
        this.tracerService
            .query({filter: 'tracer-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.tracer.nextTracer || !this.tracer.nextTracer.id) {
                    this.nexttracers = res.json;
                } else {
                    this.tracerService
                        .find(this.tracer.nextTracer.id)
                        .subscribe((subRes: Tracer) => {
                            this.nexttracers = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
        this.tracerService
            .query({filter: 'tracer-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.tracer.prevTracer || !this.tracer.prevTracer.id) {
                    this.prevtracers = res.json;
                } else {
                    this.tracerService
                        .find(this.tracer.prevTracer.id)
                        .subscribe((subRes: Tracer) => {
                            this.prevtracers = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.tracer.id !== undefined) {
            this.subscribeToSaveResponse(
                this.tracerService.update(this.tracer));
        } else {
            this.subscribeToSaveResponse(
                this.tracerService.create(this.tracer));
        }
    }

    private subscribeToSaveResponse(result: Observable<Tracer>) {
        result.subscribe((res: Tracer) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Tracer) {
        this.eventManager.broadcast({ name: 'tracerListModification', content: 'OK'});
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

    trackManufacturingOrderById(index: number, item: ManufacturingOrder) {
        return item.id;
    }

    trackMOProductById(index: number, item: MOProduct) {
        return item.id;
    }

    trackLineById(index: number, item: Line) {
        return item.id;
    }

    trackWorkStationById(index: number, item: WorkStation) {
        return item.id;
    }

    trackTracerById(index: number, item: Tracer) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-tracer-popup',
    template: ''
})
export class TracerPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private tracerPopupService: TracerPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.tracerPopupService
                    .open(TracerDialogComponent as Component, params['id']);
            } else {
                this.tracerPopupService
                    .open(TracerDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
