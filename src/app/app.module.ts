import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DeliveryComponent } from './components/delivery/delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CartComponent,
    PaymentComponent,
    ContactsComponent,
    DeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: CatalogComponent },
      { path: 'cart', component: CartComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
