import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { AppConstants } from "../../app.constants";
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {parseHttpResponse} from "selenium-webdriver/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  })
};
const httpOptionsUndefined = {
  headers: new HttpHeaders({

  })
};

@Injectable({
  providedIn: 'root'
})
export class WsService {

  constructor(private http: HttpClient
  ) { }

  /**
   * Metodo para SUBIR los archivos al FILENET
   */
  public uploadFilenet(formData) {
    console.log('Entro a uploadFilenet');
    // const BODY: any = {
    //   formData
    // };
    // return this.http.post('http://10.0.0.69:8080/CP-DES_UI_PRIV_6979/getFilenetDocument', BODY, httpOptions)
    return this.http.post( AppConstants.URL_SERVICE  + '/uploadClientFile', formData, httpOptionsUndefined)
    // return this.http.get('http://localhost:9080/despriv/keepAlive/Hola', httpOptions )
      .subscribe(data => (
        console.log(data)
        ));
  }

  public submitApplication(submitRequest) {
    console.log('Entro a submitApplication');
    console.log(submitRequest);
    const BODY: any = {
      submitRequest
    };
    return this.http.post(AppConstants.URL_SERVICE  + '/submitApplication', BODY, httpOptions)
      .subscribe(data => (
        console.log(data)
        ));
  }

  /**
   * Metodo para CREAR el ZIP
   */
  public createZip(ficheros): Observable<any> {
    console.log('Entro a createZip');
    console.log('ficheros');
    console.log(ficheros);
    const BODY: any = {
        archivos: ficheros
    };
    return this.http.post(AppConstants.URL_SERVICE  + '/createZip', ficheros, httpOptionsUndefined);
  }

  /**
   * Metodo para DESCARGAR de las ruta fisica el ZIP
   */
  public downloadZip(url): Observable<any> {
    console.log('Entro a downloadZip');
    const fd = new FormData();
    fd.append('pcURI', url);
    return this.http.post(AppConstants.URL_SERVICE + '/downloadZip', fd, {responseType: 'arraybuffer'});
  }

  /**
   * Metodo para ELIMINAR de las ruta fisica el ZIP
   */
  public deleteZip(url): Observable<any> {
    console.log('Entro a deleteZip');
    const fd = new FormData();
    fd.append('pcURI', url);
    return this.http.post(AppConstants.URL_SERVICE + '/deleteZip', fd, httpOptionsUndefined);
  }

  /**
   * Metodo para validar el token de la forma de pago
   */
  public validateMitToken(mitToken): Observable<any> {
    console.log('Entro a validateMitToken');
    const BODY = new FormData();
    BODY.append('token', mitToken);
    return this.http.post(AppConstants.URL_SERVICE + '/validateMitToken', BODY, httpOptionsUndefined);
  }

}
