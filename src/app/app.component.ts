import { Component,HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'flowers-store';
  myTest: string = 'Наши телефоны: +375-29-999-99-99';
  myTest1: string =  'Прием заказов: пн-пт 9:00- 21:00';
}
