/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { SfiTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { PTAttributeDetailComponent } from '../../../../../../main/webapp/app/entities/p-t-attribute/pt-attribute-detail.component';
import { PTAttributeService } from '../../../../../../main/webapp/app/entities/p-t-attribute/pt-attribute.service';
import { PTAttribute } from '../../../../../../main/webapp/app/entities/p-t-attribute/pt-attribute.model';

describe('Component Tests', () => {

    describe('PTAttribute Management Detail Component', () => {
        let comp: PTAttributeDetailComponent;
        let fixture: ComponentFixture<PTAttributeDetailComponent>;
        let service: PTAttributeService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [SfiTestModule],
                declarations: [PTAttributeDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    PTAttributeService,
                    JhiEventManager
                ]
            }).overrideTemplate(PTAttributeDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(PTAttributeDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PTAttributeService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new PTAttribute(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.pTAttribute).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
