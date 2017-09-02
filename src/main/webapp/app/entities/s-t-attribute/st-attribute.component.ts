import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { STAttribute } from './st-attribute.model';
import { STAttributeService } from './st-attribute.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-st-attribute',
    templateUrl: './st-attribute.component.html'
})
export class STAttributeComponent implements OnInit, OnDestroy {
sTAttributes: STAttribute[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private sTAttributeService: STAttributeService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.sTAttributeService.query().subscribe(
            (res: ResponseWrapper) => {
                this.sTAttributes = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInSTAttributes();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: STAttribute) {
        return item.id;
    }
    registerChangeInSTAttributes() {
        this.eventSubscriber = this.eventManager.subscribe('sTAttributeListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
