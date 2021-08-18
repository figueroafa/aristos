import {Component, OnInit} from '@angular/core';
import {ChartOptions} from 'chart.js';

@Component({
  selector: 'app-info-prestamo',
  templateUrl: './info-prestamo.component.html',
  styleUrls: ['./info-prestamo.component.scss']
})
export class InfoPrestamoComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Desglose de la inversión'
    },
  };
  public pieChartLegend = true;


  public pieChartLabels = ['Mogo dinero propio invertido - 5% / € 15.00', 'Mogo share - 3% / € 10.00', '16 Investor shares - 92% / € 275.00'];
  public pieChartData = [5, 3, 92];

  constructor() {
  }

  ngOnInit(): void {
  }

}
