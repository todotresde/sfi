import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Tracer } from './tracer.model';
import { TracerService } from './tracer.service';

@Injectable()
export class TracerPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
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
                    tracer.inTime = this.datePipe
                        .transform(tracer.inTime, 'yyyy-MM-ddTHH:mm:ss');
                    tracer.startTime = this.datePipe
                        .transform(tracer.startTime, 'yyyy-MM-ddTHH:mm:ss');
                    tracer.endTime = this.datePipe
                        .transform(tracer.endTime, 'yyyy-MM-ddTHH:mm:ss');
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
