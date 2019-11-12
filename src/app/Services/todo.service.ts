import { Injectable } from "@angular/core";
import { ItemModel } from '../models/item.model';
import { Item } from '../interfaces/item.interface';


@Injectable()

export class TodoService {
      
    itemList:Item[] = [];
    item: Item = {id:0, toDoText: null}


    get() {
        return this.itemList;
    }

    // add(item) {
    //     this.itemList = [...this.itemList, item]; 
    // }

    add(item) {
        return new Promise((resolve, reject) => {    
            resolve(item)
        })
    }

    edit() {
        // Tallenna vain muistiin, kun edit action
        console.log("itemList edit: ", this.itemList)
    }

    delete(id) {
        this.itemList = this.itemList.filter(item => {
            return item.id !== id
        })
    }


}