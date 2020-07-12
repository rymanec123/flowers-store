import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './components/catalog/catalog.component';
import {CartComponent} from './components/cart/cart.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {DeliveryComponent} from './components/delivery/delivery.component';
import {PaymentComponent} from './components/payment/payment.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CatalogComponent
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
