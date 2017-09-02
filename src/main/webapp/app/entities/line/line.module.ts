import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SfiSharedModule } from '../../shared';
import {
    LineService,
    LinePopupService,
    LineComponent,
    LineDetailComponent,
    LineDialogComponent,
    LinePopupComponent,
    LineDeletePopupComponent,
    LineDeleteDialogComponent,
    lineRoute,
    linePopupRoute,
} from './';

const ENTITY_STATES = [
    ...lineRoute,
    ...linePopupRoute,
];

@NgModule({
    imports: [
        SfiSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        LineComponent,
        LineDetailComponent,
        LineDialogComponent,
        LineDeleteDialogComponent,
        LinePopupComponent,
        LineDeletePopupComponent,
    ],
    entryComponents: [
        LineComponent,
        LineDialogComponent,
        LinePopupComponent,
        LineDeleteDialogComponent,
        LineDeletePopupComponent,
    ],
    providers: [
        LineService,
        LinePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SfiLineModule {}
