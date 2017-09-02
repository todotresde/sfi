/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { SfiTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { ManufacturingOrderDetailComponent } from '../../../../../../main/webapp/app/entities/manufacturing-order/manufacturing-order-detail.component';
import { ManufacturingOrderService } from '../../../../../../main/webapp/app/entities/manufacturing-order/manufacturing-order.service';
import { ManufacturingOrder } from '../../../../../../main/webapp/app/entities/manufacturing-order/manufacturing-order.model';

describe('Component Tests', () => {

    describe('ManufacturingOrder Management Detail Component', () => {
        let comp: ManufacturingOrderDetailComponent;
        let fixture: ComponentFixture<ManufacturingOrderDetailComponent>;
        let service: ManufacturingOrderService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [SfiTestModule],
                declarations: [ManufacturingOrderDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    ManufacturingOrderService,
                    JhiEventManager
                ]
            }).overrideTemplate(ManufacturingOrderDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ManufacturingOrderDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ManufacturingOrderService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new ManufacturingOrder(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.manufacturingOrder).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
