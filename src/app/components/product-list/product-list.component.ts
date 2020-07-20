import {AfterViewInit, Component, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '@app/shared/mocks/catalog.mock';
import {ProductDefinition} from "@app/shared/interfaces";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit, OnDestroy, AfterViewInit {
  myProducts: ProductDefinition[] = products;
  product: ProductDefinition = null;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log('Компонет Каталог создался');
  }

  ngOnDestroy() {
    console.log('Верстка Каталог подъехала');
  }

  ngAfterViewInit() {
    console.log('Компонет Каталог  удалился');
  }

}