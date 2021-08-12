import { Component, Input, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/products';

import listaProductos from '../../../../assets/json/productos.json';

import { ProductosService } from '../../../productos.service'

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {


  constructor(private menuSevice: ProductosService, private idProductoService: ProductosService) { }
  Productos: any = listaProductos;


  perros = listaProductos.filter(i => i.animal == "Perro");

  /* formateaPrecio = listaProductos.map(i => {
    if(i.animal == "Perro")
     return i.precioActual.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }); */




  dataArrMarca = [];
  marca = listaProductos.filter(i => {
    if (i.animal == "Perro")
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
        this.perros.sort((a, b) => a.id - b.id)
        break;
      case "2":
        /* ORDEN DE MENOR A MAYOR */
        this.perros.sort((a, b) => a.precioActual - b.precioActual)
        break;
      case "3":
        /* ORDEN DE MAYOR A MENOR */
        this.perros.sort((a, b) => b.precioActual - a.precioActual)
        break;
      default:
        this.perros.sort((a, b) => a.id - b.id)
        break;
    }
  }

  /* SELECIONAR VALOR MARCA */
  onChangeMarca(marcaSelect: string) {

    (<HTMLInputElement>document.getElementById("selectOrden")).value = "1";

    let perro = listaProductos.filter(i => i.animal == "Perro");

    if (marcaSelect == "1") {
      return this.perros = perro.sort((a, b) => a.id - b.id);
    } else {
      let producto = perro.filter(i => i.marca == marcaSelect);
      return this.perros = producto.slice(0);
    }
    /*  let remove = perrito.splice(0, Object.keys(this.perros).length, ...producto); */

    //return this.perros = producto.slice(0);

  }

  /* OBTENER EL ID DEL PRODUCTO */
  getValueProducto(id){
    console.log(id);
    this.idProductoService.idProducto = id;
  }


  ngOnInit(): void {
    (<HTMLInputElement>document.getElementById("selectMarca")).value = "1";
    console.log("pruebaaa ", this.menuSevice.datosMenu);
    /* console.log(this.perros.map(i => {
      return i.precioActual.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    })
    ); */

    /* OBTENER LA CATEGORIA PARA CADA PRODUCTO */
    switch (this.menuSevice.datosMenu) {
      case "alimento":
        this.perros = this.perros.filter(i => i.categoria == "alimento");
        break;
      case "Higiene y Salud":
        this.perros = this.perros.filter(i => i.categoria == "Higiene y Salud");
        break;
      case "Accesorios":
        this.perros = this.perros.filter(i => i.categoria == "Accesorios");
        break;
      case "Ropa":
        this.perros = this.perros.filter(i => i.categoria == "Ropa");
        break;
      case "Cama":
        this.perros = this.perros.filter(i => i.categoria == "Cama");
        break;

      default:
        this.perros;
        break;
    }
  }


}
