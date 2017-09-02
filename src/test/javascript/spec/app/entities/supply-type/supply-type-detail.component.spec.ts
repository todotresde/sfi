/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { SfiTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { SupplyTypeDetailComponent } from '../../../../../../main/webapp/app/entities/supply-type/supply-type-detail.component';
import { SupplyTypeService } from '../../../../../../main/webapp/app/entities/supply-type/supply-type.service';
import { SupplyType } from '../../../../../../main/webapp/app/entities/supply-type/supply-type.model';

describe('Component Tests', () => {

    describe('SupplyType Management Detail Component', () => {
        let comp: SupplyTypeDetailComponent;
        let fixture: ComponentFixture<SupplyTypeDetailComponent>;
        let service: SupplyTypeService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [SfiTestModule],
                declarations: [SupplyTypeDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    SupplyTypeService,
                    JhiEventManager
                ]
            }).overrideTemplate(SupplyTypeDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SupplyTypeDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SupplyTypeService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new SupplyType(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.supplyType).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
