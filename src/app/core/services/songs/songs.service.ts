import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  getSongs(){
    let parametros = new HttpParams();
    parametros = parametros.append('range','1-10');
    parametros = parametros.append('date','2019-05-11');

    const opciones = {
      headers: new HttpHeaders({
        'x-rapidapi-host':'billboard-api2.p.rapidapi.com',
        'x-rapidapi-key': '75235280femsh64b0e2b21983b57p1c3848jsn57b2fcc63d71'
      }),
      params: parametros
    };
    return this.http.get('https://billboard-api2.p.rapidapi.com/hot-100',opciones);
  }
}
