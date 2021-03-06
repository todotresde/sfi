import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SfiSharedModule } from '../../shared';
import {
    WorkStationService,
    WorkStationPopupService,
    WorkStationComponent,
    WorkStationDetailComponent,
    WorkStationDialogComponent,
    WorkStationPopupComponent,
    WorkStationDeletePopupComponent,
    WorkStationDeleteDialogComponent,
    workStationRoute,
    workStationPopupRoute,
} from './';

const ENTITY_STATES = [
    ...workStationRoute,
    ...workStationPopupRoute,
];

@NgModule({
    imports: [
        SfiSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        WorkStationComponent,
        WorkStationDetailComponent,
        WorkStationDialogComponent,
        WorkStationDeleteDialogComponent,
        WorkStationPopupComponent,
        WorkStationDeletePopupComponent,
    ],
    entryComponents: [
        WorkStationComponent,
        WorkStationDialogComponent,
        WorkStationPopupComponent,
        WorkStationDeleteDialogComponent,
        WorkStationDeletePopupComponent,
    ],
    providers: [
        WorkStationService,
        WorkStationPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SfiWorkStationModule {}
