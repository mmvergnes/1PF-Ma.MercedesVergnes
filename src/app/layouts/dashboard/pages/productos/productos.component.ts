import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';
import { IProduct } from './models';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent implements OnInit{
  displayedColumns = ['id', 'nombre', 'precio', 'acciones'];

  products: IProduct[] = [];

  constructor(private productsService: ProductosService){}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
