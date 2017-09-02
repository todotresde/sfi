import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { WSConfigurationComponent } from './ws-configuration.component';
import { WSConfigurationDetailComponent } from './ws-configuration-detail.component';
import { WSConfigurationPopupComponent } from './ws-configuration-dialog.component';
import { WSConfigurationDeletePopupComponent } from './ws-configuration-delete-dialog.component';

export const wSConfigurationRoute: Routes = [
    {
        path: 'ws-configuration',
        component: WSConfigurationComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.wSConfiguration.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'ws-configuration/:id',
        component: WSConfigurationDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.wSConfiguration.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const wSConfigurationPopupRoute: Routes = [
    {
        path: 'ws-configuration-new',
        component: WSConfigurationPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.wSConfiguration.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'ws-configuration/:id/edit',
        component: WSConfigurationPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.wSConfiguration.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'ws-configuration/:id/delete',
        component: WSConfigurationDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'sfiApp.wSConfiguration.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
