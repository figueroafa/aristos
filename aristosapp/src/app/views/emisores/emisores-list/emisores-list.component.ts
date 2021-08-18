import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'app-emisores-list',
  templateUrl: './emisores-list.component.html',
  styleUrls: ['./emisores-list.component.scss']
})
export class EmisoresListComponent implements OnInit {

  public showDetail = false;

  tipo: NgOption[];
  selectedTipo: NgOption;

  pais: NgOption[];
  selectedPais: NgOption;

  garantiaR = ['Si', 'No'];
  selectedGarantiaR = [];

  calificacion = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D'];
  selectedCalificacion = [];

  originador: NgOption[];
  selectedOriginador: NgOption;

  estructura: NgOption[];
  selectedEstructura: NgOption;

  garantiaG = ['Si', 'No'];
  selectedGarantiaG = [];

  emisores_detalle = [];
  emisores_resumen = [];

  dtResponsiveOptions: DataTables.Settings = {};
  dtLanguage: DataTables.LanguageSettings = {
    search: 'Buscar',
    lengthMenu: 'Mostrar _MENU_ registros',
    info: 'Mostrando página _PAGE_ de _PAGES_',
    infoFiltered: '(Filtrado de _MAX_ registros)',
    paginate: {
      first: 'Primero',
      last: 'Último',
      next: 'Siguiente',
      previous: 'Anterior'
    },
    emptyTable: 'No se encontraron resultados'
  };

  constructor(
    private apiService: ApiService
  ) {
    this.dtResponsiveOptions = {
      responsive: true,
      paging: false,
      language: this.dtLanguage,
      // tslint:disable-next-line:ban-types
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.show(data);
        });
        return row;
      }
    };
  }

  ngOnInit() {
    this.getCatalogs();
    this.getEmisoresResumen();
    this.getEmisoresDetalle();
  }

  show(data) {
    this.showDetail = true;
  }

  return() {
    this.showDetail = false;
  }

  getCatalogs() {
    this.apiService.getCatalogTipo().subscribe( response => {
      this.tipo = response.map( resp => {
        return {
          id: resp.id,
          name: resp.name
        };
      });
    });
    this.apiService.getCatalogOriginador().subscribe( response => {
      this.originador = response.map( resp => {
        return {
          id: resp.id,
          name: resp.name
        };
      });
      this.estructura = response.map( resp => {
        return {
          id: resp.id,
          name: resp.name
        };
      });
    });
    this.apiService.getCatalogPais().subscribe( response => {
      this.pais = response.map( resp => {
        return {
          id: resp.id,
          name: resp.name
        };
      });
    });
  }

  getEmisoresResumen() {
    this.apiService.getEmisoresResumen().subscribe( response => {
      this.emisores_resumen = response;
    });
  }

  getEmisoresDetalle() {
    this.apiService.getEmisoresDetalle().subscribe( response => {
      this.emisores_detalle = response;
    });
  }
}
