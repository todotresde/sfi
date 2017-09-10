import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SfiSharedModule } from '../../shared';
import {
    TracerService,
    TracerPopupService,
    TracerComponent,
    TracerWorkStationComponent,
    TracerDetailComponent,
    TracerStartComponent,
    TracerStartPopupComponent,
    TracerDialogComponent,
    TracerPopupComponent,
    TracerDeletePopupComponent,
    TracerDeleteDialogComponent,
    tracerRoute,
    tracerPopupRoute,
} from './';

import { SmallUUID } from '../../app.pipes';

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
        TracerWorkStationComponent,
        TracerDetailComponent,
        TracerDialogComponent,
        TracerStartComponent,
        TracerStartPopupComponent,
        TracerDeleteDialogComponent,
        TracerPopupComponent,
        TracerDeletePopupComponent,
        SmallUUID
    ],
    entryComponents: [
        TracerComponent,
        TracerWorkStationComponent,
        TracerDialogComponent,
        TracerStartComponent,
        TracerStartPopupComponent,
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
