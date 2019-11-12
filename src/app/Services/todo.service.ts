import { Injectable } from "@angular/core";
import { ItemModel } from '../models/item.model';
import { Item } from '../interfaces/item.interface';


@Injectable()

export class TodoService {

    
    // itemList:Item[] = [];
    itemLISTA = []
   // item: Item = {id:0, toDoText: null}
    item

    get() {
        return this.itemLISTA;
    }

    add(item) {
        console.log("added", item)
        this.itemLISTA = [...this.itemLISTA, item];
        console.log("itemList in service: ", this.itemLISTA)
    }

    edit(id, ) {
        // Lisää taulukko-objektiin, jolla sama id; ei taulukon id:hen !
        // this.itemList[id]= {id:id, toDoText: editItem};

        console.log("itemList sama id ennen: ", this.itemLISTA)
        // this.itemLISTA.find(item => {
        //     return item.id === id;
        // })
        console.log("itemList sama id jälkeen: ", this.itemLISTA)
    }

    delete(id) {
        console.log("delete: ", id);
        this.itemLISTA = this.itemLISTA.filter(item => {
        return item.id !== id
      })
    }


}