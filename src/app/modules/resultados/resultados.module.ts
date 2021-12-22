import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadosComponent } from './resultados/resultados.component';
import { NzCardModule } from 'ng-zorro-antd/card';



@NgModule({
  declarations: [
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    NzCardModule
  ],exports:[
    ResultadosComponent
  ]
})
export class ResultadosModule { }
