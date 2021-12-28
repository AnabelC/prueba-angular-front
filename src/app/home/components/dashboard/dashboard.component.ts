import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from './../../../core/services/products/products.service'
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private productsService: ProductsService, private breakpointObserver: BreakpointObserver) {}

  products: Product[] = [];

  clickProduct(id: number){
    console.log('product');
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
}
