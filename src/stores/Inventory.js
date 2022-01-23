import { observable, action, makeObservable, computed } from 'mobx'
import { Item } from './Item'


export class Inventory {
    constructor() {
        this.items = []
        this.length = 0
        makeObservable(this, {
            items: observable,
            length: observable,
            buyItem: action,
            addItem: action,
            changePrice: action,
            deleteItem : action,
            numItems : computed
        })
    }
    buyItem = async (name) => {
        let item = this.items.find(i => i.name === name)
         if(item.quantity === 0) await this.deleteItem(name)
        else item.quantity -= 1
    }
    addItem = (name, price=0, quantity=1) => {
        let item = this.items.find(i => i.name === name)
        if(item !== undefined){
            item.quantity += 1
        }
        else this.items.push(new Item(name, price, quantity))
    }
    changePrice = (name, price) => {
        console.log(name, price);
        let item = this.items.find(i => i.name === name)
        item.price = price
    }
    deleteItem = (name) => {
        let itemIndex = this.items.findIndex(i => i.name === name)
        this.list.splice(itemIndex,1)
    }
    get numItems(){
        return this.items.length
    }
}