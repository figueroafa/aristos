import {RouterModule, Routes} from '@angular/router';
import {RegistroNaturalComponent} from './crear-cuenta/registro-natural/registro-natural.component';
import {RegistroEmpresaComponent} from './crear-cuenta/registro-empresa/registro-empresa.component';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {
    path: 'registro-natural',
    component: RegistroNaturalComponent
  },
  {
    path: 'registro-empresa',
    component: RegistroEmpresaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanciacionRoutingModule {
}
