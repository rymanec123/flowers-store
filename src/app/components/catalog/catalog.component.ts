import {AfterViewInit, Component, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { products } from '../products';
import {CartService} from "../../cart.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() test: string;
  @Output() test1 = new EventEmitter<number>();

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.test1.emit(5);
    console.log('Компонет Каталог создался');
  }

  onMyClick(event) {
    console.log(event);
  }

  ngOnDestroy() {
    console.log('Верстка Каталог подъехала');
  }

  ngAfterViewInit() {
    console.log('Компонет Каталог  удалился');
  }

}
