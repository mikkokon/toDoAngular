import { Injectable } from "@angular/core";
import { ItemModel } from '../models/item.model';


@Injectable()

export class TodoService {

    // itemList: ItemModel[] = [];
    itemList = [];
    item

    get() {
        return this.itemList;
    }

    add(item) {
        console.log("added", item)
        this.itemList = [...this.itemList, item];
    }

    delete(index) {
        console.log("delete: ", index);
        this.itemList.splice(index, 1);
    }


}