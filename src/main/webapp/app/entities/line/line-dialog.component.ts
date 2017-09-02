import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Line } from './line.model';
import { LinePopupService } from './line-popup.service';
import { LineService } from './line.service';

@Component({
    selector: 'jhi-line-dialog',
    templateUrl: './line-dialog.component.html'
})
export class LineDialogComponent implements OnInit {

    line: Line;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private lineService: LineService,
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
        if (this.line.id !== undefined) {
            this.subscribeToSaveResponse(
                this.lineService.update(this.line));
        } else {
            this.subscribeToSaveResponse(
                this.lineService.create(this.line));
        }
    }

    private subscribeToSaveResponse(result: Observable<Line>) {
        result.subscribe((res: Line) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Line) {
        this.eventManager.broadcast({ name: 'lineListModification', content: 'OK'});
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
    selector: 'jhi-line-popup',
    template: ''
})
export class LinePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private linePopupService: LinePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.linePopupService
                    .open(LineDialogComponent as Component, params['id']);
            } else {
                this.linePopupService
                    .open(LineDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
