import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { LineComponent } from './line.component';
import { LineDetailComponent } from './line-detail.component';
import { LinePopupComponent } from './line-dialog.component';
import { LineDeletePopupComponent } from './line-delete-dialog.component';

export const lineRoute: Routes = [
    {
        path: 'line',
        component: LineComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.line.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'line/:id',
        component: LineDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.line.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const linePopupRoute: Routes = [
    {
        path: 'line-new',
        component: LinePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.line.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'line/:id/edit',
        component: LinePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.line.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'line/:id/delete',
        component: LineDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.line.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
