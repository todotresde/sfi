import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SfiSharedModule } from '../../shared';
import {
    SupplyService,
    SupplyPopupService,
    SupplyComponent,
    SupplyDetailComponent,
    SupplyDialogComponent,
    SupplyPopupComponent,
    SupplyDeletePopupComponent,
    SupplyDeleteDialogComponent,
    supplyRoute,
    supplyPopupRoute,
} from './';

const ENTITY_STATES = [
    ...supplyRoute,
    ...supplyPopupRoute,
];

@NgModule({
    imports: [
        SfiSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        SupplyComponent,
        SupplyDetailComponent,
        SupplyDialogComponent,
        SupplyDeleteDialogComponent,
        SupplyPopupComponent,
        SupplyDeletePopupComponent,
    ],
    entryComponents: [
        SupplyComponent,
        SupplyDialogComponent,
        SupplyPopupComponent,
        SupplyDeleteDialogComponent,
        SupplyDeletePopupComponent,
    ],
    providers: [
        SupplyService,
        SupplyPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SfiSupplyModule {}
