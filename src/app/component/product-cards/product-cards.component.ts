import { Component, OnInit } from '@angular/core';

import listaProductos from '../../../assets/json/productos.json';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  mostrar:boolean= true;

  Productos: any = listaProductos;

 /*  const mostrarIcono = (existe:string){

  } */
}
