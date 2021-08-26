import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductosRoutingModule } from './productos-routing.module'

import { ListaProductosComponent } from './pages/lista-productos/lista.productos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [ListaProductosComponent, DetalleComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports:[ListaProductosComponent,
    DetalleComponent,
    RouterModule
  ]
})
export class ProductosModule { }
