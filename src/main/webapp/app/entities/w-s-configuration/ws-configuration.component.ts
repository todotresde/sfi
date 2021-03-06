import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { WSConfiguration } from './ws-configuration.model';
import { WSConfigurationService } from './ws-configuration.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-ws-configuration',
    templateUrl: './ws-configuration.component.html'
})
export class WSConfigurationComponent implements OnInit, OnDestroy {
wSConfigurations: WSConfiguration[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private wSConfigurationService: WSConfigurationService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.wSConfigurationService.query().subscribe(
            (res: ResponseWrapper) => {
                this.wSConfigurations = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInWSConfigurations();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: WSConfiguration) {
        return item.id;
    }
    registerChangeInWSConfigurations() {
        this.eventSubscriber = this.eventManager.subscribe('wSConfigurationListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
