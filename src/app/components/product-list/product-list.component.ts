import {AfterViewInit, Component, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '@app/shared/mocks/catalog.mock';
import {ProductDefinition} from '@app/shared/interfaces';
import {ApiService} from '@app/services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']

})

export class ProductListComponent implements OnInit, OnDestroy, AfterViewInit {
  myProducts: ProductDefinition[] = products;
  product: ProductDefinition = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    console.log('Компонет Каталог создался');
    this.apiService.getAllProducts().subscribe(res=>console.log(res))
  }

  ngOnDestroy() {
    console.log('Верстка Каталог подъехала');
  }

  ngAfterViewInit() {
    console.log('Компонет Каталог  удалился');
  }

}
