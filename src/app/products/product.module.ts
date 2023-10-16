import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { productDetailsGuard } from './product-details.guard';
import { ProductDetailsComponent } from './product-details.component';
import { ConverToSpacesPipe } from '../shared/convert-to-space.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ConverToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', 
      canActivate: [productDetailsGuard],
      component: ProductDetailsComponent}
    ]),
    SharedModule
  ]
})
export class ProductModule { }
