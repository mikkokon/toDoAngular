import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { TodoService } from '../Services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  // providers: [TodoService]
})
export class ListComponent implements OnInit {

  @Input() item:Item;

  private newSessionsSubs: Subscription;

  constructor(public toDoService: TodoService) { }

  ngOnInit() {
  }

  edit() {
      // ([ngModel]) :ssa tallennetaan muutettu string taulukkoon this.itemList
      // this.itemList = [...this.todoService.get()] :ssa : kopioita. Ei pitäisi
      // olla sama referenssi muistipaikassa. Joten servicessä ei pitäisi näkyä muutos,
      // mutta näkyy silti..?
      // https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array?source=post_page-----9a782b17fa89----------------------
      this.toDoService.edit()
  }

  delete(id) {
      this.toDoService.delete(id);
  }
}
