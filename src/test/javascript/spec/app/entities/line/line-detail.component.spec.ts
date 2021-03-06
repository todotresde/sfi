/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { SfiTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { LineDetailComponent } from '../../../../../../main/webapp/app/entities/line/line-detail.component';
import { LineService } from '../../../../../../main/webapp/app/entities/line/line.service';
import { Line } from '../../../../../../main/webapp/app/entities/line/line.model';

describe('Component Tests', () => {

    describe('Line Management Detail Component', () => {
        let comp: LineDetailComponent;
        let fixture: ComponentFixture<LineDetailComponent>;
        let service: LineService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [SfiTestModule],
                declarations: [LineDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    LineService,
                    JhiEventManager
                ]
            }).overrideTemplate(LineDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(LineDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LineService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Line(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.line).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
