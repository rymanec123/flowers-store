import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor() { }

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
