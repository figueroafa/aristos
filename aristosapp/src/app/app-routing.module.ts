import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./views/home/home.module').then(module => module.HomeModule),
        data: {
          title: 'Inicio'
        }
      },
      {
        path: 'emisores',
        loadChildren: () => import('./views/emisores/emisores.module').then(module => module.EmisoresModule),
        data: {
          title: 'Emisores'
        }
      },
      {
        path: 'marketplace',
        loadChildren: () => import('./views/marketplace/marketplace.module').then(module => module.MarketplaceModule),
        data: {
          title: 'Marketplace'
        }
      },
      {
        path: 'financiacion',
        loadChildren: () => import('./views/financiacion/financiacion.module').then(module => module.FinanciacionModule),
        data: {
          title: 'Financiación'
        }
      },
      {
        path: 'inversiones',
        loadChildren: () => import('./views/inversiones/inversiones.module').then(module => module.InversionesModule),
        data: {
          title: 'Inversiones'
        }
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./views/auth/auth.module').then(module => module.AuthModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
