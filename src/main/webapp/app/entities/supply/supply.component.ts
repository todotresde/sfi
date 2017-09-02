import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { Supply } from './supply.model';
import { SupplyService } from './supply.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-supply',
    templateUrl: './supply.component.html'
})
export class SupplyComponent implements OnInit, OnDestroy {
supplies: Supply[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private supplyService: SupplyService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.supplyService.query().subscribe(
            (res: ResponseWrapper) => {
                this.supplies = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInSupplies();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Supply) {
        return item.id;
    }
    registerChangeInSupplies() {
        this.eventSubscriber = this.eventManager.subscribe('supplyListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
