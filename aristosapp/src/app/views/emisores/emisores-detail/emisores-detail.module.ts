import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {TableModule} from 'ngx-easy-table';
import {DataTablesModule} from 'angular-datatables';
import {EmisoresDetailComponent} from './emisores-detail.component';
import {EmisoresDetailRoutingModule} from './emisores-detail-routing.module';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [
    // EmisoresDetailComponent
  ],
    imports: [
        CommonModule,
        EmisoresDetailRoutingModule,
        SharedModule,
        NgbTabsetModule,
        NgSelectModule,
        TableModule,
        DataTablesModule
    ]
})
export class EmisoresDetailModule { }
