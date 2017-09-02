/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { SfiTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { TracerDetailComponent } from '../../../../../../main/webapp/app/entities/tracer/tracer-detail.component';
import { TracerService } from '../../../../../../main/webapp/app/entities/tracer/tracer.service';
import { Tracer } from '../../../../../../main/webapp/app/entities/tracer/tracer.model';

describe('Component Tests', () => {

    describe('Tracer Management Detail Component', () => {
        let comp: TracerDetailComponent;
        let fixture: ComponentFixture<TracerDetailComponent>;
        let service: TracerService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [SfiTestModule],
                declarations: [TracerDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    TracerService,
                    JhiEventManager
                ]
            }).overrideTemplate(TracerDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TracerDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TracerService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tracer(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tracer).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
