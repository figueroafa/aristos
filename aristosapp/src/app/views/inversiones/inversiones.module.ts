import {NgModule} from '@angular/core';
import {InmobiliarioComponent} from './proyectos/inmobiliario/inmobiliario.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../theme/shared/shared.module';
import {InversionesRoutingModule} from './inversiones-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RegistroInversionesComponent} from './registro-inversiones/registro-inversiones.component';

@NgModule({
  declarations: [
    InmobiliarioComponent,
    RegistroInversionesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InversionesRoutingModule,
    NgbModule
  ]
})
export class InversionesModule {}
