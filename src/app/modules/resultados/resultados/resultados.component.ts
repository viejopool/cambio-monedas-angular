import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cotizacion } from 'src/app/core/models/monedas';
import { CambioService } from 'src/app/shared/services/cambio.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  cotizacion$!:Observable<Cotizacion>

  constructor(private _cambioService:CambioService) { }

  ngOnInit(): void {
    this.cotizacion$=this._cambioService.getCotizacion()
  }

}
