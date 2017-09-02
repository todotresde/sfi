import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { SupplyType } from './supply-type.model';
import { SupplyTypeService } from './supply-type.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-supply-type',
    templateUrl: './supply-type.component.html'
})
export class SupplyTypeComponent implements OnInit, OnDestroy {
supplyTypes: SupplyType[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private supplyTypeService: SupplyTypeService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.supplyTypeService.query().subscribe(
            (res: ResponseWrapper) => {
                this.supplyTypes = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInSupplyTypes();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: SupplyType) {
        return item.id;
    }
    registerChangeInSupplyTypes() {
        this.eventSubscriber = this.eventManager.subscribe('supplyTypeListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
