import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '@app/services/cart/cart.service';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit, OnDestroy, AfterViewInit {
  items;
  checkoutForm;
  id: string;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    // private matInputModule,
  ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      login: '',
      address: '',
    });
  }

  onSubmit(customerData) {

    console.warn('Ваш заказ был отправлен', customerData);
    alert('Ваш заказ был отправлен');

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }


  ngOnInit() {}

  ngOnDestroy() {}

  ngAfterViewInit() {}
}
