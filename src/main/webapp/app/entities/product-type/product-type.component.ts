import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { ProductType } from './product-type.model';
import { ProductTypeService } from './product-type.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-product-type',
    templateUrl: './product-type.component.html'
})
export class ProductTypeComponent implements OnInit, OnDestroy {
productTypes: ProductType[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private productTypeService: ProductTypeService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.productTypeService.query().subscribe(
            (res: ResponseWrapper) => {
                this.productTypes = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInProductTypes();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ProductType) {
        return item.id;
    }
    registerChangeInProductTypes() {
        this.eventSubscriber = this.eventManager.subscribe('productTypeListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
