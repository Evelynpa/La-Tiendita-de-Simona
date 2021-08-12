import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntaFrecuentesComponent } from './pregunta-frecuentes/pregunta-frecuentes.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PreguntasRoutingModule } from './preguntas-routing.module';



@NgModule({
  declarations: [PreguntaFrecuentesComponent],
  imports: [
    CommonModule,
    PreguntasRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PreguntaFrecuentesComponent,
    RouterModule
  ]
})
export class PreguntasModule { }
