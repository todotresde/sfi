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
    ManufacturingOrderSendPopupComponent,
    ManufacturingOrderDeleteDialogComponent,
    ManufacturingOrderSendDialogComponent,
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
        ManufacturingOrderSendDialogComponent,
        ManufacturingOrderPopupComponent,
        ManufacturingOrderDeletePopupComponent,
        ManufacturingOrderSendPopupComponent,
    ],
    entryComponents: [
        ManufacturingOrderComponent,
        ManufacturingOrderDialogComponent,
        ManufacturingOrderPopupComponent,
        ManufacturingOrderDeleteDialogComponent,
        ManufacturingOrderSendDialogComponent,
        ManufacturingOrderDeletePopupComponent,
        ManufacturingOrderSendPopupComponent,
    ],
    providers: [
        ManufacturingOrderService,
        ManufacturingOrderPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SfiManufacturingOrderModule {}
