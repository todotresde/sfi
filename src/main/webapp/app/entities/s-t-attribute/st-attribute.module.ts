import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SfiSharedModule } from '../../shared';
import {
    STAttributeService,
    STAttributePopupService,
    STAttributeComponent,
    STAttributeDetailComponent,
    STAttributeDialogComponent,
    STAttributePopupComponent,
    STAttributeDeletePopupComponent,
    STAttributeDeleteDialogComponent,
    sTAttributeRoute,
    sTAttributePopupRoute,
} from './';

const ENTITY_STATES = [
    ...sTAttributeRoute,
    ...sTAttributePopupRoute,
];

@NgModule({
    imports: [
        SfiSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        STAttributeComponent,
        STAttributeDetailComponent,
        STAttributeDialogComponent,
        STAttributeDeleteDialogComponent,
        STAttributePopupComponent,
        STAttributeDeletePopupComponent,
    ],
    entryComponents: [
        STAttributeComponent,
        STAttributeDialogComponent,
        STAttributePopupComponent,
        STAttributeDeleteDialogComponent,
        STAttributeDeletePopupComponent,
    ],
    providers: [
        STAttributeService,
        STAttributePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SfiSTAttributeModule {}
