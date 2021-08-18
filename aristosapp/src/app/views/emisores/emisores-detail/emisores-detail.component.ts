import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emisores-detail',
  templateUrl: './emisores-detail.component.html',
  styleUrls: ['./emisores-detail.component.scss']
})
export class EmisoresDetailComponent implements OnInit {

  dtResponsiveOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit() {
    this.dtResponsiveOptions = {
      responsive: true,
      paging: false,
      searching: false,
      autoWidth: false,
    };
  }

}
