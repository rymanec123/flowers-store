import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from '@app/components/cart/cart.component';
import { PaymentComponent } from '@app/components/payment/payment.component';
import { ContactsComponent } from '@app/components/contacts/contacts.component';
import { DeliveryComponent } from '@app/components/delivery/delivery.component';
import { ProductListComponent } from '@app/components/product-list/product-list.component';
import { ProductDetailsComponent } from '@app/components/product-details/product-details.component';
import { FormComponent } from '@app/components/form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PaymentComponent,
    ContactsComponent,
    DeliveryComponent,
    ProductListComponent,
    ProductDetailsComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
