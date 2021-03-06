import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { SupplyComponent } from './supply.component';
import { SupplyDetailComponent } from './supply-detail.component';
import { SupplyPopupComponent } from './supply-dialog.component';
import { SupplyDeletePopupComponent } from './supply-delete-dialog.component';

export const supplyRoute: Routes = [
    {
        path: 'supply',
        component: SupplyComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.supply.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'supply/:id',
        component: SupplyDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.supply.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const supplyPopupRoute: Routes = [
    {
        path: 'supply-new',
        component: SupplyPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.supply.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'supply/:id/edit',
        component: SupplyPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.supply.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'supply/:id/delete',
        component: SupplyDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.supply.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
