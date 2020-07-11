import {AfterViewInit, Component, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() test: string;
  @Output() test1 = new EventEmitter<number>();

  constructor() { }


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
