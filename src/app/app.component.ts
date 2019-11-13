import { Component } from '@angular/core';
import { ItemModel } from './models/item.model';
import { Item } from './interfaces/item.interface';
import { TodoService } from '../app/Services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// Kt. Layout mallia: https://assist-software.net/blog/how-use-redux-angular-application
export class AppComponent {
  itemList: Item[] = [];
  private newSessionsSubs: Subscription;

  // Päivitetään koko lista, kun add() tai delete() 
  constructor(private toDoService: TodoService) {
      // vatii observablen : Kun "add item" painettu servicen add() publish ja täällä subscribe
      this.newSessionsSubs = this.toDoService.newDataFound().subscribe((data) => { 
         this.itemList = data 
   })
  }

  // kt.mallia stecil todo .. refresh jne 
  // LUE: https://blog.fullstacktraining.com/angular-promise-vs-observable/
  // LUE https://dev.to/avatsaev/simple-state-management-in-angular-with-only-services-and-rxjs-41p8

  // lisää local storage
  // Tee responsiivinen (css) sämpylä ...
  // Viimeistele värit , layout ym.


}
