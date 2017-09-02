/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { SfiTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { SupplyDetailComponent } from '../../../../../../main/webapp/app/entities/supply/supply-detail.component';
import { SupplyService } from '../../../../../../main/webapp/app/entities/supply/supply.service';
import { Supply } from '../../../../../../main/webapp/app/entities/supply/supply.model';

describe('Component Tests', () => {

    describe('Supply Management Detail Component', () => {
        let comp: SupplyDetailComponent;
        let fixture: ComponentFixture<SupplyDetailComponent>;
        let service: SupplyService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [SfiTestModule],
                declarations: [SupplyDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    SupplyService,
                    JhiEventManager
                ]
            }).overrideTemplate(SupplyDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SupplyDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SupplyService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Supply(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.supply).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
