import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { ManufacturingOrder } from './manufacturing-order.model';
import { ManufacturingOrderService } from './manufacturing-order.service';

@Component({
    selector: 'jhi-manufacturing-order-detail',
    templateUrl: './manufacturing-order-detail.component.html'
})
export class ManufacturingOrderDetailComponent implements OnInit, OnDestroy {

    manufacturingOrder: ManufacturingOrder;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private manufacturingOrderService: ManufacturingOrderService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInManufacturingOrders();
    }

    load(id) {
        this.manufacturingOrderService.find(id).subscribe((manufacturingOrder) => {
            this.manufacturingOrder = manufacturingOrder;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInManufacturingOrders() {
        this.eventSubscriber = this.eventManager.subscribe(
            'manufacturingOrderListModification',
            (response) => this.load(this.manufacturingOrder.id)
        );
    }
}
