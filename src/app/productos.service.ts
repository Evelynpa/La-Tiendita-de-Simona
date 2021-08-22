import { Injectable, Output } from '@angular/core';

import listaProductos from '../assets/json/productos.json';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  @Output() datosMenu: string; 

  @Output() idProducto: string; 
  constructor() { }


  Productos: any = listaProductos;

  obtenerUnProducto(id){
    console.log("Service",listaProductos.filter(i => i.id == id))
    return listaProductos.filter(i => i.id == id);
  }
}
