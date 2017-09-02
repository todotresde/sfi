import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SfiSharedModule } from '../../shared';
import {
    ManufacturingOrderService,
    ManufacturingOrderPopupService,
    ManufacturingOrderComponent,
    ManufacturingOrderDetailComponent,
    ManufacturingOrderDialogComponent,
    ManufacturingOrderPopupComponent,
    ManufacturingOrderDeletePopupComponent,
    ManufacturingOrderDeleteDialogComponent,
    manufacturingOrderRoute,
    manufacturingOrderPopupRoute,
} from './';

const ENTITY_STATES = [
    ...manufacturingOrderRoute,
    ...manufacturingOrderPopupRoute,
];

@NgModule({
    imports: [
        SfiSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ManufacturingOrderComponent,
        ManufacturingOrderDetailComponent,
        ManufacturingOrderDialogComponent,
        ManufacturingOrderDeleteDialogComponent,
        ManufacturingOrderPopupComponent,
        ManufacturingOrderDeletePopupComponent,
    ],
    entryComponents: [
        ManufacturingOrderComponent,
        ManufacturingOrderDialogComponent,
        ManufacturingOrderPopupComponent,
        ManufacturingOrderDeleteDialogComponent,
        ManufacturingOrderDeletePopupComponent,
    ],
    providers: [
        ManufacturingOrderService,
        ManufacturingOrderPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SfiManufacturingOrderModule {}
