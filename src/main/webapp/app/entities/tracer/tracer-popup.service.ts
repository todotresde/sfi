import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tracer } from './tracer.model';
import { TracerService } from './tracer.service';

@Injectable()
export class TracerPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private tracerService: TracerService

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
                this.tracerService.find(id).subscribe((tracer) => {
                    if (tracer.inTime) {
                        tracer.inTime = {
                            year: tracer.inTime.getFullYear(),
                            month: tracer.inTime.getMonth() + 1,
                            day: tracer.inTime.getDate()
                        };
                    }
                    if (tracer.startTime) {
                        tracer.startTime = {
                            year: tracer.startTime.getFullYear(),
                            month: tracer.startTime.getMonth() + 1,
                            day: tracer.startTime.getDate()
                        };
                    }
                    if (tracer.endTime) {
                        tracer.endTime = {
                            year: tracer.endTime.getFullYear(),
                            month: tracer.endTime.getMonth() + 1,
                            day: tracer.endTime.getDate()
                        };
                    }
                    this.ngbModalRef = this.tracerModalRef(component, tracer);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.tracerModalRef(component, new Tracer());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    tracerModalRef(component: Component, tracer: Tracer): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tracer = tracer;
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
