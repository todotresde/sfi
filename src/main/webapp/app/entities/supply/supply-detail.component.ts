import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Supply } from './supply.model';
import { SupplyService } from './supply.service';

@Component({
    selector: 'jhi-supply-detail',
    templateUrl: './supply-detail.component.html'
})
export class SupplyDetailComponent implements OnInit, OnDestroy {

    supply: Supply;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private supplyService: SupplyService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInSupplies();
    }

    load(id) {
        this.supplyService.find(id).subscribe((supply) => {
            this.supply = supply;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInSupplies() {
        this.eventSubscriber = this.eventManager.subscribe(
            'supplyListModification',
            (response) => this.load(this.supply.id)
        );
    }
}
