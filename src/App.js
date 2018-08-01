import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {index: -1};
    this.strings = [
    'simple',
    'two words',
    'this has three',
    'this string has four',
    'this string has five words',
    'are you bored yet, because I sure am',
    ];
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
    const index = (this.state.index + 1) % this.strings.length;
    this.setState({index});
  } // handleClick

  message (index) {
    return this.strings[this.state.index];
  } // message
  
} // class App

export default App;
