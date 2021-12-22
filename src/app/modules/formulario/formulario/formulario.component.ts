import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CambioService } from 'src/app/shared/services/cambio.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formCambio!:FormGroup
  monedas$!:Observable<string[]>;
  suscripcion!:Subscription;

  constructor(private fb:FormBuilder,private _cambioService:CambioService) {
   }

  ngOnInit(): void {
    this.formCambio=this.fb.group({
      cantidad:['',Validators.required],
      moneda1:['',Validators.required],
      moneda2:['',Validators.required]
    })
    this.monedas$=this._cambioService.getAllCurrency()
  }
  submitForm(){
      this._cambioService.getCoversion(this.formCambio.value).subscribe(data=>{
      this._cambioService.setCotizacion(data)
      this.formCambio.reset()
      this._cambioService.setDsiplay()
    })
  }
}