/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { SfiTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { STAttributeDetailComponent } from '../../../../../../main/webapp/app/entities/s-t-attribute/st-attribute-detail.component';
import { STAttributeService } from '../../../../../../main/webapp/app/entities/s-t-attribute/st-attribute.service';
import { STAttribute } from '../../../../../../main/webapp/app/entities/s-t-attribute/st-attribute.model';

describe('Component Tests', () => {

    describe('STAttribute Management Detail Component', () => {
        let comp: STAttributeDetailComponent;
        let fixture: ComponentFixture<STAttributeDetailComponent>;
        let service: STAttributeService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [SfiTestModule],
                declarations: [STAttributeDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    STAttributeService,
                    JhiEventManager
                ]
            }).overrideTemplate(STAttributeDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(STAttributeDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(STAttributeService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new STAttribute(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.sTAttribute).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
