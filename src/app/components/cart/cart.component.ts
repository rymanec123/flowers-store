import {AfterViewInit, Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '@app/services/cart/cart.service';
import { FormBuilder } from '@angular/forms';
import { UserService } from '@app/services/user/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit, OnDestroy, AfterViewInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    public userService: UserService
  ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: this.userService.name,
      telephone : this.userService.telephone,
      address: ''
    });
  }

  

  onSubmit(customerData) {

    console.warn('Ваш заказ был отправлен', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    console.log('Компонет Корзина создался');
    this.userService.user.subscribe(
      res => console.log(res)
    )
  }

  ngOnDestroy() {}

  ngAfterViewInit() {}
}
