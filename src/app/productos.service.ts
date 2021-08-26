import { Injectable, Output } from '@angular/core';

import listaProductos from '../assets/json/productos.json';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  @Output() datosMenu: string;
  @Output() datosMenuCategoria: string;

  @Output() idProducto: string;
  constructor() { }


  Productos: any = listaProductos;

  obtenerUnProducto(_id) {
    return listaProductos.filter(i => i.id == _id);
  }

  getProductos(_categoria: string, _animal: string) {
    let productosSeleccionados = listaProductos.filter(i => i.categoria == _categoria && i.animal == _animal);
    let productosAll = listaProductos.filter(i => i.animal == _animal);
    return listaProductos.filter(i => i.categoria == _categoria && i.animal == _animal);
  }

  getProductosPorCategoria(_categoria: string){
    return listaProductos.filter(i => i.categoria == _categoria);
  }
}
