import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from './../../../utils/validators'

import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form!: FormGroup;
  _id!: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) =>{
      this._id = params['_id'];
      this.productsService.getProduct(this._id)
      .subscribe(product =>{
        this.form.patchValue(product);
      });
    });
  }

  saveProduct(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value
      this.productsService.updateProduct(this._id, product)
      .subscribe((newProduct) =>{
        this.router.navigate(['./products'])
      });
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['',[Validators.required]],
      price: [0,[Validators.required, MyValidators.isPriceValid]],
      image: '',
      description: ['',[Validators.required]],
    });
  }

  get priceField() {
    return this.form.get('price');
  }
}
