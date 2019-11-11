import { Component } from '@angular/core';
import { ItemModel } from './models/item.model';
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
  // itemList: ItemModel[] = [];
  itemList = [];
  index = 0;

  constructor(private todoService: TodoService) {
    
  }

  // kt.mallia stecil todo .. refresh jne 
  // Laita add ja delete serviceen
  // "edit" -toiminto myös
  // tee list -komponentti

  add() {
      // this.itemList = [...this.itemList, new ItemModel(this.item, this.index++)];
      console.log("item: ", this.item)
      console.log("itemList: ", this.itemList)
      this.todoService.add(this.item);
      this.itemList = this.todoService.get();
      console.log("itemList: ", this.itemList)

  }

  edit(index, editItem) {
    console.log("item:", editItem)
    console.log("index: ", index)
    console.log("this.itemList[index]", this.itemList[index])
    let temp = this.itemList[index];
    console.log("temp: ", temp)
    this.itemList[index]= editItem;
    console.log("itemList: ", this.itemList)
  }

  delete(index) {
      // this.itemList = this.itemList.filter(item => {
      //   return item.index !== index
      // })
      this.todoService.delete(index);
      this.itemList = this.todoService.get();
  }


}
