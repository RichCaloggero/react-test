import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {message: ''};
    this.strings = [
    'simple',
    'two words',
    'this has three',
    'this string has four',
    'this string has five words',
    'are you bored yet, because I sure am',
    'oneLastTest--ThisHasNoBlanksInItAndIsFairlyLengthy'
    ];
    this.index = -1;
    
    this.inputRef = React.createRef();
    this.messageRef = React.createRef();
    this.directToDom = false;
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  } // constructor


  message () {
    const text = this.inputRef.current.value;
    if (text.length === 0) this.index = (this.index+1) % this.strings.length;
    const index = this.index;
    return text.length > 0? text : this.strings[index];
  } // message


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img alt="" src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React and live regions</h1>
        </header>
          <label>Direct to dom: <input type="checkbox" onChange={this.handleChange} /></label>
          <label>Text: <input ref={this.inputRef} type="text"/></label>
          <button onClick={this.handleClick}>
          Click Me
        </button>
        <div ref={this.messageRef} aria-live="polite" aria-atomic="true">
          {this.state.message}
        </div>
      </div>
    );
  } // render


  handleChange (e) {
    this.directToDom = e.target.checked;
  } // handleChange
  
  handleClick () {
    const message = this.message();
    
    if (this.directToDom) {
      this.messageRef.current.textContent = message;
      console.log('direct: ', message);
    } else {
      const text = this.inputRef.current.value;
      this.setState({message});
    } // if
    
  } // handleClick


} // class App

export default App;
