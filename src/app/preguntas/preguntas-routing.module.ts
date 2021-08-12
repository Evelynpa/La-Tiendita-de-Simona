import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntaFrecuentesComponent } from './pregunta-frecuentes/pregunta-frecuentes.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    
    children: [
      { path: 'preguntas-frecuentes', component: PreguntaFrecuentesComponent }
     
    ],
    
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PreguntasRoutingModule { }
