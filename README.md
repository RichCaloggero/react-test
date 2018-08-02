This repository contains a very simple react app which uses a live region to cause a screen reader to announce various messages when a button is clicked.

However, react seems to update the DOM in such a way as to cause the screen reader to repeat the message, in some cases as many as 5 or 6 times in succession.

The react app can be seen running here:

https://RichCaloggero.github.io/react-test/build/

- goto the above URL using Firefox and the NVDA screen reader
- click the button
- expected behavior:
	+ hear a different message spoken each time the button is clicked
	+ each message should repeat once
- actual behavior:
	+ a different message is spoken, in some cases more than once, each time the button is clicked

The native DOM implementation can be seen running here:

https://RichCaloggero.github.io/react-test/nativeDomImplementation.html

Same as above, accept that using Firefox+NVDA, each message is spoken at most once each time the button is clicked.


The render function is as follows:

```
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
```

See the entire source file here:

https://github.com/RichCaloggero/react-test/blob/master/src/App.js


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
