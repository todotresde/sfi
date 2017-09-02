import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { SupplyType } from './supply-type.model';
import { SupplyTypeService } from './supply-type.service';

@Component({
    selector: 'jhi-supply-type-detail',
    templateUrl: './supply-type-detail.component.html'
})
export class SupplyTypeDetailComponent implements OnInit, OnDestroy {

    supplyType: SupplyType;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private supplyTypeService: SupplyTypeService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInSupplyTypes();
    }

    load(id) {
        this.supplyTypeService.find(id).subscribe((supplyType) => {
            this.supplyType = supplyType;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInSupplyTypes() {
        this.eventSubscriber = this.eventManager.subscribe(
            'supplyTypeListModification',
            (response) => this.load(this.supplyType.id)
        );
    }
}
