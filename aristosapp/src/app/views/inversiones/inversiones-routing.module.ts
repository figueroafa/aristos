import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InmobiliarioComponent} from './proyectos/inmobiliario/inmobiliario.component';
import {RegistroInversionesComponent} from './registro-inversiones/registro-inversiones.component';

const routes: Routes = [
  {
    path: 'inmobiliario',
    component: InmobiliarioComponent
  },
  {
    path: 'reg_inversion',
    component: RegistroInversionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InversionesRoutingModule {}
