import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flowers-store';
  myTest: string = 'Наши телефоны: +375-29-999-99-99';
  myTest1: string =  'Прием заказов: пн-пт 9:00- 21:00';
  onMyClick: any;

}
