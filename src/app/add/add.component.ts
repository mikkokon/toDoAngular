import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { TodoService } from '../../app/Services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  item:Item = {id:0, toDoText: ''}

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  add() {
    this.todoService.add({id: this.item.id++, toDoText: this.item.toDoText} );
  }

}
