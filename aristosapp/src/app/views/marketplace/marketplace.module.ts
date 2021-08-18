import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../theme/shared/shared.module';
import {MercadoPrimarioComponent} from './mercado-primario/mercado-primario.component';
import {MarketplaceRoutingModule} from './marketplace-routing.module';
import {DataTablesModule} from 'angular-datatables';
import {NgSelectModule} from '@ng-select/ng-select';
import {InfoPrestamoComponent} from './info-prestamo/info-prestamo.component';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {ChartsModule} from 'ng2-charts';
import {Ng5SliderModule} from 'ng5-slider';
import {NgxFlagIconCssModule} from 'ngx-flag-icon-css';

@NgModule({
  declarations: [
    MercadoPrimarioComponent,
    InfoPrestamoComponent
  ],
    imports: [
        CommonModule,
        MarketplaceRoutingModule,
        SharedModule,
        DataTablesModule,
        NgSelectModule,
        NgbTabsetModule,
        ChartsModule,
        Ng5SliderModule,
        NgxFlagIconCssModule
    ]
})
export class MarketplaceModule { }
