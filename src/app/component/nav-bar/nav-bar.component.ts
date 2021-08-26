import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../../productos.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private menuSevice: ProductosService) {}

  getValue(alimento: string, categoria:string){
    this.menuSevice.datosMenu = alimento;
    this.menuSevice.datosMenuCategoria = categoria;
  }


  ngOnInit(): void {
  }

}
