import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { SupplyTypeComponent } from './supply-type.component';
import { SupplyTypeDetailComponent } from './supply-type-detail.component';
import { SupplyTypePopupComponent } from './supply-type-dialog.component';
import { SupplyTypeDeletePopupComponent } from './supply-type-delete-dialog.component';

export const supplyTypeRoute: Routes = [
    {
        path: 'supply-type',
        component: SupplyTypeComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.supplyType.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'supply-type/:id',
        component: SupplyTypeDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.supplyType.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const supplyTypePopupRoute: Routes = [
    {
        path: 'supply-type-new',
        component: SupplyTypePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.supplyType.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'supply-type/:id/edit',
        component: SupplyTypePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.supplyType.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'supply-type/:id/delete',
        component: SupplyTypeDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.supplyType.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
