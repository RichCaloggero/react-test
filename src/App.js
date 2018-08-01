import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {flag: false};
    this.handleClick = this.handleClick.bind(this);
  } // constructor

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.handleClick}>
          Click Me
        </button>
        <div aria-live="polite" aria-atomic="true">
          {this.message(this.state.flag)}
        </div>
      </div>
    );
  } // render

  handleClick () {
    let flag = !this.state.flag;
    this.setState({flag});
  } // handleClick

  message (flag) {
    if (flag) return 'A value';
    else return 'No values';
  } // message
  
} // class App

export default App;
