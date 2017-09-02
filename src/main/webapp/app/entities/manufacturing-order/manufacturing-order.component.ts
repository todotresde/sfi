import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { ManufacturingOrder } from './manufacturing-order.model';
import { ManufacturingOrderService } from './manufacturing-order.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-manufacturing-order',
    templateUrl: './manufacturing-order.component.html'
})
export class ManufacturingOrderComponent implements OnInit, OnDestroy {
manufacturingOrders: ManufacturingOrder[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private manufacturingOrderService: ManufacturingOrderService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.manufacturingOrderService.query().subscribe(
            (res: ResponseWrapper) => {
                this.manufacturingOrders = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInManufacturingOrders();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ManufacturingOrder) {
        return item.id;
    }
    registerChangeInManufacturingOrders() {
        this.eventSubscriber = this.eventManager.subscribe('manufacturingOrderListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
