import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Options} from 'ng5-slider';
import {ChartOptions} from 'chart.js';

@Component({
  selector: 'app-mercado-primario',
  templateUrl: './mercado-primario.component.html',
  styleUrls: ['./mercado-primario.component.scss']
})
export class MercadoPrimarioComponent implements OnInit {

  public showInfoPrestamo = false;

  tipo = [
    'Préstamo comercial',
    'Préstamo presonal',
    'Préstamo hipotecario',
    'Préstamo agrario',
    'Préstamo a corto plazo',
    'Préstamo de pignoración',
    'Factoraje',
    'Préstamo de vehiculo'
  ];
  selectedTipo = [];

  pais = ['Albania', 'Armenia', 'Belarus', 'Botswana', 'Bulgaria', 'Colombia', 'Dinamarca', 'España', 'Estonia', 'Finlandia'];
  selectedPais = [];

  garantia = ['Si', 'No'];
  selectedGarantia = [];

  originador = ['1pm plc', 'Aasa Polska', 'Acema', 'SIA AgroCredit'];
  selectedOriginador = [];

  dtResponsiveOptions: DataTables.Settings = {};

  valueInteres = 10;
  highValueInteres = 15;
  optionsInteres: Options = {
    floor: 5,
    step: 0.1,
    ceil: 20
  };

  valueVencimiento = 40;
  highValueVencimiento = 60;
  optionsVencimiento: Options = {
    floor: 0,
    step: 1,
    ceil: 72
  };

  public pieChartOptions: ChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Desglose de la inversión'
    },
  };
  public pieChartLegend = true;


  public pieChartLabels = ['Mogo dinero propio invertido - 5% / € 15.00',
    'Mogo share - 3% / € 10.00', '16 Investor shares - 92% / € 275.00'];
  public pieChartData = [5, 3, 92];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dtResponsiveOptions = {
      responsive: true,
      paging: false,
      searching: false,
      autoWidth: false,
    };
  }

  goToInfoPrestamo() {
    this.showInfoPrestamo = true;
    // this.router.navigate(['marketplace/info-prestamo']);
  }

  return() {
    this.showInfoPrestamo = false;
  }

}
