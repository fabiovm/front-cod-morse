import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

const url = environment.apiUrl + '/norse';

@Injectable({
  providedIn: 'root'
})
export class MorseService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 
   * @param texto 
   * @returns 
   */
  public getCodigficacao(texto):  Observable<any> {
    const httpOptionsPage = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Max-Age': '86400'
      })
    };

    let params = {};
    
    if (texto !== undefined) {
      params["codificar"] = texto;
    }

    return this.http.get(url, { headers: httpOptionsPage.headers, params: params })
  }
}
