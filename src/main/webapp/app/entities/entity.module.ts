import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SfiEmployeeModule } from './employee/employee.module';
import { SfiLineModule } from './line/line.module';
import { SfiWSConfigurationModule } from './w-s-configuration/ws-configuration.module';
import { SfiWorkStationModule } from './work-station/work-station.module';
import { SfiManufacturingOrderModule } from './manufacturing-order/manufacturing-order.module';
import { SfiMOProductModule } from './m-o-product/mo-product.module';
import { SfiSupplyModule } from './supply/supply.module';
import { SfiSupplyTypeModule } from './supply-type/supply-type.module';
import { SfiSTAttributeModule } from './s-t-attribute/st-attribute.module';
import { SfiProductModule } from './product/product.module';
import { SfiProductTypeModule } from './product-type/product-type.module';
import { SfiPTAttributeModule } from './p-t-attribute/pt-attribute.module';
import { SfiTracerModule } from './tracer/tracer.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        SfiEmployeeModule,
        SfiLineModule,
        SfiWSConfigurationModule,
        SfiWorkStationModule,
        SfiManufacturingOrderModule,
        SfiMOProductModule,
        SfiSupplyModule,
        SfiSupplyTypeModule,
        SfiSTAttributeModule,
        SfiProductModule,
        SfiProductTypeModule,
        SfiPTAttributeModule,
        SfiTracerModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SfiEntityModule {}
