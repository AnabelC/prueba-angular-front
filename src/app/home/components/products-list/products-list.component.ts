import { Component, OnInit } from '@angular/core';
import { Product } from './../../../core/models/product.model';

import { ProductsService } from './../../../core/services/products/products.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = []
  displayedColumns: string[] = ['_id', 'name', 'price', 'actions'];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(){
    this.productsService.getAllProducts()
    .subscribe(products =>{
      this.products = products;
    })
  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id)
    .subscribe(rta =>{
      this.fetchProduct();
    })
  }
}
