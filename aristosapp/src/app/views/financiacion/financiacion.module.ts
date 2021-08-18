import {NgModule} from '@angular/core';
import {RegistroNaturalComponent} from './crear-cuenta/registro-natural/registro-natural.component';
import {RegistroEmpresaComponent} from './crear-cuenta/registro-empresa/registro-empresa.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../theme/shared/shared.module';
import {FinanciacionRoutingModule} from './financiacion-routing.module';

@NgModule({
  declarations: [
    RegistroNaturalComponent,
    RegistroEmpresaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FinanciacionRoutingModule
  ]
})
export class FinanciacionModule {
}
