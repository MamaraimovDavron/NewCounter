import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Counter</h1>
        <div className='circle--container'>
            <p>0</p>
        </div>
        <div className='buttons--container'>
            <button className='plus'>+</button>
            <button className='reset'>&#x21bb;</button>
            <button className='minus'>-</button>
        </div>
      </div>
    )
  }
}
