import { Component, OnInit } from '@angular/core';

import { Preguntas } from '../../models/preguntas'
import listaPreguntas from '../../../assets/json/preguntas.json'

@Component({
  selector: 'app-pregunta-frecuentes',
  templateUrl: './pregunta-frecuentes.component.html',
  styleUrls: ['./pregunta-frecuentes.component.css']
})
export class PreguntaFrecuentesComponent implements OnInit {

  constructor() { }

  Preguntas: any = listaPreguntas;
  preguntas = listaPreguntas.filter(i => i);

  ngOnInit(): void {
  }

}
