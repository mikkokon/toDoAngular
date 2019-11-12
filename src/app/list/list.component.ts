import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { TodoService } from '../Services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  // providers: [TodoService]
})
export class ListComponent implements OnInit {

  item;
  itemList: Item[] = [];
  id = 0;

  constructor(public toDoService: TodoService) { }

  ngOnInit() {
  }

  // vatii observablen : Kun "add item" painettu servicen add() publish ja täällä subscribe
  async add() {

  }

  edit() {
      // ([ngModel]) :ssa tallennetaan muutettu string taulukkoon this.itemList
      // this.itemList = [...this.todoService.get()] :ssa : kopioita. Ei pitäisi
      // olla sama referenssi muistipaikassa. Joten servicessä ei pitäisi näkyä muutos,
      // mutta näkyy silti..?
      // https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array?source=post_page-----9a782b17fa89----------------------
      this.toDoService.edit()
      this.itemList = this.toDoService.get() //turha
      console.log("itemList: ", this.itemList)
  }

  delete(id) {
      this.toDoService.delete(id);
      this.itemList = this.toDoService.get()
      console.log("itemList: ", this.itemList)
  }
}
