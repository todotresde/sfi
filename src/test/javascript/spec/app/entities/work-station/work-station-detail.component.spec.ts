/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { SfiTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { WorkStationDetailComponent } from '../../../../../../main/webapp/app/entities/work-station/work-station-detail.component';
import { WorkStationService } from '../../../../../../main/webapp/app/entities/work-station/work-station.service';
import { WorkStation } from '../../../../../../main/webapp/app/entities/work-station/work-station.model';

describe('Component Tests', () => {

    describe('WorkStation Management Detail Component', () => {
        let comp: WorkStationDetailComponent;
        let fixture: ComponentFixture<WorkStationDetailComponent>;
        let service: WorkStationService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [SfiTestModule],
                declarations: [WorkStationDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    WorkStationService,
                    JhiEventManager
                ]
            }).overrideTemplate(WorkStationDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(WorkStationDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(WorkStationService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new WorkStation(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.workStation).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
