import { observable, makeObservable } from 'mobx'

export class Item {
    constructor(name) {
        this.name = name
        this.price = 5
        this.quantity = 5
        makeObservable(this, {
            name: observable,
            price: observable,
            quantity: observable
        })
    }
}