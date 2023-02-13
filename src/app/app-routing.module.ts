import { ContactComponent } from './components/contact/contact.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'categories', component: CategoriesComponent},
  {path:'contact', component: ContactComponent},
  {path:'cart', component: CartComponent},
  {path: 'categories/:categoryId/:productId', component: ProductDetailsComponent},
  {path: 'categories/:categoryId', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
