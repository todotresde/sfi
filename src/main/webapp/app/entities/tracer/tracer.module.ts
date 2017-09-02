import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SfiSharedModule } from '../../shared';
import {
    TracerService,
    TracerPopupService,
    TracerComponent,
    TracerDetailComponent,
    TracerDialogComponent,
    TracerPopupComponent,
    TracerDeletePopupComponent,
    TracerDeleteDialogComponent,
    tracerRoute,
    tracerPopupRoute,
} from './';

const ENTITY_STATES = [
    ...tracerRoute,
    ...tracerPopupRoute,
];

@NgModule({
    imports: [
        SfiSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        TracerComponent,
        TracerDetailComponent,
        TracerDialogComponent,
        TracerDeleteDialogComponent,
        TracerPopupComponent,
        TracerDeletePopupComponent,
    ],
    entryComponents: [
        TracerComponent,
        TracerDialogComponent,
        TracerPopupComponent,
        TracerDeleteDialogComponent,
        TracerDeletePopupComponent,
    ],
    providers: [
        TracerService,
        TracerPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SfiTracerModule {}
