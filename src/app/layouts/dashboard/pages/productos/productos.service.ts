import { Injectable } from '@angular/core';
import { IProduct } from './models';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  getProducts(): IProduct[]{
    return[
      {
        id: 1,
        nombre: 'Diseño Gráfico',
        precio: 3000,
      },
      {
        id: 2,
        nombre: 'Community Manager',
        precio: 5000,
      },
    ];
  }
}
