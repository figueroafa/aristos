import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {

  urlApi = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) {}

  getCatalogTipo(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/catalog_tipo`);
  }

  getCatalogPais(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/catalog_pais`);
  }

  getCatalogOriginador(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/catalog_originador`);
  }

  getEmisoresResumen(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/emisores_resumen`);
  }

  getEmisoresDetalle(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/emisores_detalle`);
  }
}
