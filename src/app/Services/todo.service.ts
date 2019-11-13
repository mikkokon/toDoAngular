import { Injectable } from "@angular/core";
import { ItemModel } from '../models/item.model';
import { Item } from '../interfaces/item.interface';
import { Observable, Subject } from 'rxjs';


@Injectable()

export class TodoService {
      
    itemList:Item[] = [];
    item: Item = {id:0, toDoText: null}
    private newDataFoundSubj = new Subject<any>();

    get() {
        return this.itemList;
    }

    add(item) {
        this.itemList = [...this.itemList, item]
        this.newDataFoundSubj.next(this.itemList);
    }

     /**
     * An observable that emits when new data available.
     */
    public newDataFound(): Observable<any> {
        return this.newDataFoundSubj.asObservable();
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