import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmisoresListComponent} from './emisores-list/emisores-list.component';
import {EmisoresDetailComponent} from './emisores-detail/emisores-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: EmisoresListComponent,
  },
  {
    path: 'detail',
    component: EmisoresDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmisoresRoutingModule { }
