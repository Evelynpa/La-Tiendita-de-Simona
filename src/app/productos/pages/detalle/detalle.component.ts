import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Productos } from 'src/app/models/products';
import { ProductosService } from 'src/app/productos.service';

import listaProductos from '../../../../assets/json/productos.json';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() data: Productos;

  producto: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private _service: ProductosService
  ) {
    /* this.id = this.route.snapshot.params.id;
    this.producto = this._service.obtenerUnProducto(this.id); */
    this.route.params.subscribe(params => {
      this.producto = this._service.obtenerUnProducto(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
