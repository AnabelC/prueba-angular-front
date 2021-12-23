import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from './../../../core/services/products/products.service'
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { Song } from './../../../core/models/song.model';

import { SongService } from './../../../core/services/songs/songs.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  constructor(private productsService: ProductsService, private breakpointObserver: BreakpointObserver, private songService: SongService) {}

  songs: Song[] = [];

  products: Product[] = [];

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }

  ngOnInit(): void {
    this.fetchProducts();
   // this.fetchSong();
  }

  fetchProducts(){
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  fetchSong(){
    this.songService.getSongs()
    .subscribe(songs =>{
      console.log(songs)
    })
  }
}
