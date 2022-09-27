import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }

    addOne = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    deleteOne = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset = () => {
        this.setState({
            count: this.state.count = 0
        })
    }
  render() {
    return (
      <div className='container'>
        <h1>Counter</h1>
        <div className='circle--container'>
            <p>{this.state.count}</p>
        </div>
        <div className='buttons--container'>
            <button className='plus' onClick={this.addOne}>+</button>
            <button className='reset' onClick={this.reset}>&#x21bb;</button>
            <button className='minus' onClick={this.deleteOne}>-</button>
        </div>
      </div>
    )
  }
}
