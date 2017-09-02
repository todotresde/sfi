import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ManufacturingOrder } from './manufacturing-order.model';
import { ManufacturingOrderService } from './manufacturing-order.service';

@Injectable()
export class ManufacturingOrderPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private manufacturingOrderService: ManufacturingOrderService

    ) {
        this.ngbModalRef = null;
    }

    open(component: Component, id?: number | any): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            const isOpen = this.ngbModalRef !== null;
            if (isOpen) {
                resolve(this.ngbModalRef);
            }

            if (id) {
                this.manufacturingOrderService.find(id).subscribe((manufacturingOrder) => {
                    if (manufacturingOrder.date) {
                        manufacturingOrder.date = {
                            year: manufacturingOrder.date.getFullYear(),
                            month: manufacturingOrder.date.getMonth() + 1,
                            day: manufacturingOrder.date.getDate()
                        };
                    }
                    this.ngbModalRef = this.manufacturingOrderModalRef(component, manufacturingOrder);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.manufacturingOrderModalRef(component, new ManufacturingOrder());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    manufacturingOrderModalRef(component: Component, manufacturingOrder: ManufacturingOrder): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.manufacturingOrder = manufacturingOrder;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.ngbModalRef = null;
        });
        return modalRef;
    }
}
