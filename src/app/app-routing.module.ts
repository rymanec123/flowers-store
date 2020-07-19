import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from '@app/components/product-list/product-list.component';
import {CartComponent} from '@app/components/cart/cart.component';
import {ContactsComponent} from '@app/components/contacts/contacts.component';
import {DeliveryComponent} from '@app/components/delivery/delivery.component';
import {PaymentComponent} from '@app/components/payment/payment.component';
import {ProductDetailsComponent} from '@app/components/product-details/product-details.component';
import {FormComponent} from '@app/components/form/form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductListComponent
  },

  {
    path: 'products/:productId',
    component: ProductDetailsComponent
  },

  {
    path: 'form',
    component: FormComponent
  },

  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'delivery',
    component: DeliveryComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
