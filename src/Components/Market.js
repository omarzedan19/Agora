import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Item from './Item';

class Market extends Component {
    constructor(){
        super()
        this.state = {
            newItem: ''
          }
    }
    handleChange = (e) => {
        this.setState({
          newItem: e.target.value
        })
      }
      addItem = () => {
        this.props.shop.addItem(this.state.newItem)
      }
      numItems = () => {
        let num = this.props.shop.numItems
        return num
      }
  render() {
    return (
    <div className="market">
        <input onChange={this.handleChange} value={this.state.newItem}/>
        <button onClick={this.addItem}>Add</button>
        {
          <h4>Number of Item`s is : {this.numItems()}</h4>
        }
        {
          this.props.shop.items.map((i, index)=>{return(<Item item={i} key={index} shop={this.props.shop}/>)})
        }
    </div>
        )
  }
}

export default inject("shop")(observer(Market))