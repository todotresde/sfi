import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { WSConfiguration } from './ws-configuration.model';
import { WSConfigurationService } from './ws-configuration.service';

@Component({
    selector: 'jhi-ws-configuration-detail',
    templateUrl: './ws-configuration-detail.component.html'
})
export class WSConfigurationDetailComponent implements OnInit, OnDestroy {

    wSConfiguration: WSConfiguration;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private wSConfigurationService: WSConfigurationService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInWSConfigurations();
    }

    load(id) {
        this.wSConfigurationService.find(id).subscribe((wSConfiguration) => {
            this.wSConfiguration = wSConfiguration;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInWSConfigurations() {
        this.eventSubscriber = this.eventManager.subscribe(
            'wSConfigurationListModification',
            (response) => this.load(this.wSConfiguration.id)
        );
    }
}
