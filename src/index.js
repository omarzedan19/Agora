import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react'

import { Item } from '../src/stores/Item'
import {Inventory} from '../src/stores/Inventory'

let shop = new Inventory()
let item = new Item("axe")
shop.items.push(item)

let stores = {shop}
ReactDOM.render(<Provider {...stores}><App /></Provider>,document.getElementById('root')
)
reportWebVitals();