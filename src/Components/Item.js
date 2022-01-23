import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

class Item extends Component {
    buyItem = (e) => {
    this.props.shop.buyItem(e.target.value)
    }
    changePrice = (e) => {
      let input = prompt("Please enter new Price");
        if (input != null) {
          this.props.shop.changePrice(e.target.id, input)
          }
    }
  render() {
    let item = this.props.item
    return (
        <div>
          <li className="item" onDoubleClick={this.changePrice} id={item.name}>{item.quantity} {item.name} available for ${item.price} per item</li> <button value={item.name} className="buyItem" onClick={this.buyItem}>Buy</button>
        </div>
        )
  }
}

export default inject("shop")(observer(Item))