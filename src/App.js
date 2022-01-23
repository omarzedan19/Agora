import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Market from './Components/Market';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Market/>
      </div>
    )
  }
}

export default observer(App);