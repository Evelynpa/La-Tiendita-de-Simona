import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  @Output() datosMenu: string; 

  @Output() idProducto: string; 
  constructor() { }
}
