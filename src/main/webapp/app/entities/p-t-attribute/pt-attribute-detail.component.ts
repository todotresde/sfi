import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { PTAttribute } from './pt-attribute.model';
import { PTAttributeService } from './pt-attribute.service';

@Component({
    selector: 'jhi-pt-attribute-detail',
    templateUrl: './pt-attribute-detail.component.html'
})
export class PTAttributeDetailComponent implements OnInit, OnDestroy {

    pTAttribute: PTAttribute;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private pTAttributeService: PTAttributeService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInPTAttributes();
    }

    load(id) {
        this.pTAttributeService.find(id).subscribe((pTAttribute) => {
            this.pTAttribute = pTAttribute;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInPTAttributes() {
        this.eventSubscriber = this.eventManager.subscribe(
            'pTAttributeListModification',
            (response) => this.load(this.pTAttribute.id)
        );
    }
}
