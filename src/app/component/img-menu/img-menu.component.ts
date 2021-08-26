import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-img-menu',
  templateUrl: './img-menu.component.html',
  styleUrls: ['./img-menu.component.css']
})
export class ImgMenuComponent implements OnInit {

  id = '';

  constructor(private route: ActivatedRoute, private menuService: ProductosService) {
    console.log("this.id = this.route.snapshot.params.id", this.id = this.route.snapshot.params.id)
    this.id = this.route.snapshot.params.id;

  }

  ngOnInit(): void {
  }

  getValueCategoria(categoria: string) {
    //datosMenu//alimento
    //.datosMenuCategoria//perro
    this.menuService.datosMenu = categoria;
  }
}
