import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cotizacion, Monedas,formData} from '../../core/models/monedas';
import {map} from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CambioService {
  url:string;
  key:string;
  cotizacion:BehaviorSubject<any>
  display:BehaviorSubject<boolean>
  

  constructor(private http:HttpClient) {
    this.url=environment.API.URL
    this.key=environment.API.key
    this.cotizacion=new BehaviorSubject<any>({})
    this.display=new BehaviorSubject<boolean>(false)
   }

  getAllCurrency():Observable<string[]>{
   return this.http.get<Monedas>(`${this.url}${this.key}/latest/USD`).pipe(map(monedas=>monedas.conversion_rates),map(abv=>Object.keys(abv)))
  }
  getCoversion(formData:formData):Observable<Cotizacion>{
    return this.http.get<Cotizacion>(`${this.url}${this.key}/pair/${formData.moneda1}/${formData.moneda2}/${formData.cantidad}`)
  }
  setCotizacion(cotizacion:Cotizacion){
    this.cotizacion.next(cotizacion)
  }
  getCotizacion():Observable<Cotizacion>{
    return this.cotizacion.asObservable()
  }
  setDsiplay(){
    this.display.next(true)
  }
  getDisplay():Observable<boolean>{
    return this.display.asObservable()
  }
}
