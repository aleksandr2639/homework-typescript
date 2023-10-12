import Buyable from "../demo/Buyable";
export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    sumItem () : number {
       return this._items.reduce((sum, value) => (sum + value.price),0);
    }

    discountItem (discount :number) : number {
        return this.sumItem() * ((100 - discount) / 100);
    }

    deleteItem (id :number) : void {
        this._items.splice(this._items.findIndex(value=> value.id === id), 1);
    }
}
