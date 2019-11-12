import { Component } from '@angular/core';
import { ItemModel } from './models/item.model';
import { Item } from './interfaces/item.interface';
import { TodoService } from '../app/Services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [TodoService]
})

// Kt. Layout mallia: https://assist-software.net/blog/how-use-redux-angular-application
export class AppComponent {

  item;
  itemList: Item[] = [];
  id = 0;

  constructor(private todoService: TodoService) {
    
  }

  // kt.mallia stecil todo .. refresh jne 
  // LUE: https://blog.fullstacktraining.com/angular-promise-vs-observable/
  // LUE https://dev.to/avatsaev/simple-state-management-in-angular-with-only-services-and-rxjs-41p8
  // tee list -komponentti
  // lisää local storage
  // Tee responsiivinen (css) sämpylä ...
  // Viimeistele värit , layout ym.

  add() {
      this.todoService.add( {id: this.id++, toDoText: this.item} );
      this.itemList = this.todoService.get();
      console.log("itemList: ", this.itemList)
  }

  // edit() {
  //     // ([ngModel]) :ssa tallennetaan muutettu string taulukkoon this.itemList
  //     // this.itemList = [...this.todoService.get()] :ssa : kopioita. Ei pitäisi
  //     // olla sama referenssi muistipaikassa. Joten servicessä ei pitäisi näkyä muutos,
  //     // mutta näkyy silti..?
  //     // https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array?source=post_page-----9a782b17fa89----------------------
  //     this.todoService.edit()
  //     this.itemList = this.todoService.get() //turha
  //     console.log("itemList: ", this.itemList)
  // }
 
  // delete(id) {
  //     this.todoService.delete(id);
  //     this.itemList = this.todoService.get()
  //     console.log("itemList: ", this.itemList)
  // }


}
