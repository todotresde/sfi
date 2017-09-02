import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { WorkStation } from './work-station.model';
import { WorkStationService } from './work-station.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-work-station',
    templateUrl: './work-station.component.html'
})
export class WorkStationComponent implements OnInit, OnDestroy {
workStations: WorkStation[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private workStationService: WorkStationService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.workStationService.query().subscribe(
            (res: ResponseWrapper) => {
                this.workStations = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInWorkStations();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: WorkStation) {
        return item.id;
    }
    registerChangeInWorkStations() {
        this.eventSubscriber = this.eventManager.subscribe('workStationListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
