import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/models/products';

import listaProductos from '../../../../assets/json/productos.json';

import { ProductosService } from '../../../productos.service'

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista.productos.component.html',
  styleUrls: ['./lista.productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  id = '';
  producto: any[] = [];
  constructor(private menuService: ProductosService, private idProductoService: ProductosService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      console.log("params", params['categoria'])
      console.log("this._service.getProductosPorCategoria(params['categoria'])", this.menuService.getProductosPorCategoria(params['categoria']))
      this.producto = this.menuService.getProductosPorCategoria(params['categoria']);
    })
  }

  allProductos = this.menuService.getProductos(this.menuService.datosMenu, this.menuService.datosMenuCategoria);



  dataArrMarca = [];
  marca = this.allProductos.filter(i => {
    if (i.animal == this.menuService.datosMenuCategoria)
      return this.dataArrMarca.push(i.marca);
  });

  marcaUnica = [...new Set(this.dataArrMarca)]

  /* SELECIONAR VALOR SELECT */
  select = [
    { name: "Orden por defecto", value: 1 },
    { name: "Precio: bajo a alto", value: 2 },
    { name: "Precio: alto a bajo", value: 3 }
  ]
  onChange(deviceValue) {
    switch (deviceValue) {
      case "1":
        /* ORDEN POR ID */
        this.allProductos.sort((a, b) => a.id - b.id)
        break;
      case "2":
        /* ORDEN DE MENOR A MAYOR */
        this.allProductos.sort((a, b) => a.precioActual - b.precioActual)
        break;
      case "3":
        /* ORDEN DE MAYOR A MENOR */
        this.allProductos.sort((a, b) => b.precioActual - a.precioActual)
        break;
      default:
        this.allProductos.sort((a, b) => a.id - b.id)
        break;
    }
  }

  /* SELECIONAR VALOR MARCA */
  onChangeMarca(marcaSelect: string) {
    (<HTMLInputElement>document.getElementById("selectOrden")).value = "1";
    let changeMarca = this.menuService.getProductos(this.menuService.datosMenu, this.menuService.datosMenuCategoria);

    if (marcaSelect == "1") {
      return this.allProductos = changeMarca.sort((a, b) => a.id - b.id);
    } else {
      let producto = changeMarca.filter(i => i.marca == marcaSelect);

      return this.allProductos = producto.slice(0);
    }
    /*  let remove = perrito.splice(0, Object.keys(this.perros).length, ...producto); */

    //return this.perros = producto.slice(0);

  }

  /* OBTENER EL ID DEL PRODUCTO */
  getValueProducto(id) {
    console.log(id);
    this.idProductoService.idProducto = id;
  }


  ngOnInit(): void {
    (<HTMLInputElement>document.getElementById("selectMarca")).value = "1";
    console.log("datosMenu ", this.menuService.datosMenu);//alimento
    console.log("datosMenuCategoria", this.menuService.datosMenuCategoria);//perro
    console.log("allproducts", this.allProductos)

    console.log("this.producto viene de img-menu", this.producto)
    /* console.log(this.perros.map(i => {
      return i.precioActual.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    })
    ); */

    /* OBTENER LA CATEGORIA PARA CADA PRODUCTO */
    switch (this.menuService.datosMenu) {
      case "alimento":
        this.allProductos = this.allProductos.filter(i => i.categoria == this.menuService.datosMenu);
        break;
      case "Higiene y Salud":
        this.allProductos = this.allProductos.filter(i => i.categoria == this.menuService.datosMenu);
        break;
      case "Accesorios":
        this.allProductos = this.allProductos.filter(i => i.categoria == this.menuService.datosMenu);
        break;
      case "Ropa":
        this.allProductos = this.allProductos.filter(i => i.categoria == this.menuService.datosMenu);
        break;
      case "Cama":
        this.allProductos = this.allProductos.filter(i => i.categoria == this.menuService.datosMenu);
        break;
      case "todos-alimento":
        this.allProductos = this.producto;
        break;
      case "todos-accesorios":
        this.allProductos = this.producto;
        break;
      case "todos-cama":
        this.allProductos = this.producto;
        break;
      case "todos-alimento"://se debe cambiar
        this.allProductos = this.producto;
        break;
      default:
        this.allProductos;
        break;
    }
  }


}
