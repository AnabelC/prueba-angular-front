import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage'

import { finalize } from 'rxjs/operators';

import { MyValidators } from './../../../utils/validators'

import { ProductsService } from 'src/app/core/services/products/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!: FormGroup;
  image$!: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage,
  ) {
    this.buildForm();
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void { }

  saveProduct(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value
      this.productsService.createProduct(product)
      .subscribe((newProduct) =>{
        console.log(newProduct);
        this.router.navigate(['./products'])
      });
    }
  }

  uploadFile(event: Event){
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const name = 'image.png';
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url);
          this.form.get('image')?.setValue(url);
        });
      })
    )
    .subscribe();
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id:['',[Validators.required]],
      title: ['',[Validators.required]],
      price: [0,[Validators.required, MyValidators.isPriceValid]],
      image: '',
      description: ['',[Validators.required]],
    });
  }

  get priceField() {
    return this.form.get('price');
  }
}
