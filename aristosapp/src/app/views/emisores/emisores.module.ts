import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../theme/shared/shared.module';
import {EmisoresDetailComponent} from './emisores-detail/emisores-detail.component';
import {EmisoresListComponent} from './emisores-list/emisores-list.component';
import {EmisoresRoutingModule} from './emisores-routing.module';
import {NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {TableModule} from 'ngx-easy-table';
import {DataTablesModule} from 'angular-datatables';
import {NgxFlagIconCssModule} from 'ngx-flag-icon-css';

@NgModule({
  declarations: [
    EmisoresListComponent,
    EmisoresDetailComponent
  ],
  imports: [
    CommonModule,
    EmisoresRoutingModule,
    SharedModule,
    NgbTabsetModule,
    NgSelectModule,
    TableModule,
    DataTablesModule,
    NgbTooltipModule,
    NgxFlagIconCssModule
  ]
})
export class EmisoresModule { }
