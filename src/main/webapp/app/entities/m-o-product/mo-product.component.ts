import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { MOProduct } from './mo-product.model';
import { MOProductService } from './mo-product.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-mo-product',
    templateUrl: './mo-product.component.html'
})
export class MOProductComponent implements OnInit, OnDestroy {
mOProducts: MOProduct[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private mOProductService: MOProductService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.mOProductService.query().subscribe(
            (res: ResponseWrapper) => {
                this.mOProducts = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInMOProducts();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: MOProduct) {
        return item.id;
    }
    registerChangeInMOProducts() {
        this.eventSubscriber = this.eventManager.subscribe('mOProductListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
