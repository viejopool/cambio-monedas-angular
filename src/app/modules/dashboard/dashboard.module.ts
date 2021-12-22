import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormularioModule } from '../formulario/formulario.module';
import { ResultadosModule } from '../resultados/resultados.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    FormularioModule,
    ResultadosModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
