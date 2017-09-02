import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { MOProduct } from './mo-product.model';
import { MOProductService } from './mo-product.service';

@Component({
    selector: 'jhi-mo-product-detail',
    templateUrl: './mo-product-detail.component.html'
})
export class MOProductDetailComponent implements OnInit, OnDestroy {

    mOProduct: MOProduct;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private mOProductService: MOProductService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInMOProducts();
    }

    load(id) {
        this.mOProductService.find(id).subscribe((mOProduct) => {
            this.mOProduct = mOProduct;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInMOProducts() {
        this.eventSubscriber = this.eventManager.subscribe(
            'mOProductListModification',
            (response) => this.load(this.mOProduct.id)
        );
    }
}
