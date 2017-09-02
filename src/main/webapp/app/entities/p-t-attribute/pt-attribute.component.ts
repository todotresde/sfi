import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { PTAttribute } from './pt-attribute.model';
import { PTAttributeService } from './pt-attribute.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-pt-attribute',
    templateUrl: './pt-attribute.component.html'
})
export class PTAttributeComponent implements OnInit, OnDestroy {
pTAttributes: PTAttribute[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private pTAttributeService: PTAttributeService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.pTAttributeService.query().subscribe(
            (res: ResponseWrapper) => {
                this.pTAttributes = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInPTAttributes();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: PTAttribute) {
        return item.id;
    }
    registerChangeInPTAttributes() {
        this.eventSubscriber = this.eventManager.subscribe('pTAttributeListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
