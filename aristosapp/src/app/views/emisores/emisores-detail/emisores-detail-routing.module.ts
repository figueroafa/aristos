import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmisoresDetailComponent} from './emisores-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EmisoresDetailComponent,
    data: {
      title: 'Detalle de Emisores'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmisoresDetailRoutingModule { }
