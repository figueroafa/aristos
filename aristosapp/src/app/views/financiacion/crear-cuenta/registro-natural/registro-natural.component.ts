import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Options} from 'ng5-slider';
import {ChartOptions} from 'chart.js';

@Component({
  selector: 'app-registro-natural',
  templateUrl: './registro-natural.component.html'
})
export class RegistroNaturalComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToInfoPrestamo() {
    this.router.navigate(['home']);
  }
}
