import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MercadoPrimarioComponent} from './mercado-primario/mercado-primario.component';
import {InfoPrestamoComponent} from './info-prestamo/info-prestamo.component';

const routes: Routes = [
  {
    path: 'mercado-primario',
    component: MercadoPrimarioComponent,
  },
  {
    path: 'info-prestamo',
    component: InfoPrestamoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule { }
