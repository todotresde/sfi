import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SfiSharedModule } from '../../shared';
import {
    PTAttributeService,
    PTAttributePopupService,
    PTAttributeComponent,
    PTAttributeDetailComponent,
    PTAttributeDialogComponent,
    PTAttributePopupComponent,
    PTAttributeDeletePopupComponent,
    PTAttributeDeleteDialogComponent,
    pTAttributeRoute,
    pTAttributePopupRoute,
} from './';

const ENTITY_STATES = [
    ...pTAttributeRoute,
    ...pTAttributePopupRoute,
];

@NgModule({
    imports: [
        SfiSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        PTAttributeComponent,
        PTAttributeDetailComponent,
        PTAttributeDialogComponent,
        PTAttributeDeleteDialogComponent,
        PTAttributePopupComponent,
        PTAttributeDeletePopupComponent,
    ],
    entryComponents: [
        PTAttributeComponent,
        PTAttributeDialogComponent,
        PTAttributePopupComponent,
        PTAttributeDeleteDialogComponent,
        PTAttributeDeletePopupComponent,
    ],
    providers: [
        PTAttributeService,
        PTAttributePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SfiPTAttributeModule {}
