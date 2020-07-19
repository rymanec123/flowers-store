import {AfterViewInit, Component, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '@app/shared/mocks/catalog.mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() test: string;
  @Output() test1 = new EventEmitter<number>();
  myProducts = products

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.test1.emit(5);
    console.log('Компонет Каталог создался');
  }

  ngOnDestroy() {
    console.log('Верстка Каталог подъехала');
  }

  ngAfterViewInit() {
    console.log('Компонет Каталог  удалился');
  }

}
