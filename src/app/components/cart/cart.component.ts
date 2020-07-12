import {AfterViewInit, Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})


export class CartComponent implements OnInit, OnDestroy, AfterViewInit {
  items;

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  ngOnInit(): void {
    console.log('Компонет Корзина создался');
  }

  ngOnDestroy() {
    console.log('Верстка Корзина подъехала');
  }

  ngAfterViewInit() {
    console.log('Компонет Корзина  удалился');
  }

}

