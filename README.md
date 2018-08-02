This repository contains a very simple react app which uses a [live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) to cause a screen reader to announce various messages when a button is clicked.

However, react seems to update the DOM in such a way as to cause the screen reader to repeat the message, in some cases as many as 5 or 6 times in succession.

The react app can be seen running here:

https://RichCaloggero.github.io/react-test/build/

Go to the above URL, and perform the following steps using Firefox or chrome with the NVDA screen reader.

_Note: the behavior only seems to show up with NVDA, in either Chrome or firefox. Jaws and VoiceOver do not exhibit the behavior, regardless of browser used._.

## Test 1

1. click the button
  + expected behavior: hear a different message spoken each time the button is clicked; each message should repeat once
  + actual behavior: message is spoken, in comse cases more than once, each time the button is clicked
2. now check the "direct to DOM" checkbox and repeat
  + all messages are spoken only once

## Test 2

1. uncheck the checkbox and enter some text in the input box (for instance "my own text") and click the button
  + the message is spoken, perhaps more than once
2. add a character to the end of the text (such as "1") and click the button
  + new message is spoken (perhaps more than once)
3. now delete the extra character and click
  + message is *not* spoken
4. check the "direct to DOM" checkbox and repeat steps 1 through 3 above
  + all text will be spoken, even after deleting the extra characters (i.e. step 3 above)


The native DOM implementation can be seen running here:

https://RichCaloggero.github.io/react-test/nativeDomImplementation.html

Same as above, accept that using Firefox+NVDA, each message is spoken at most once each time the button is clicked.



The render function is as follows:

```
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
```

See the entire source file here:

https://github.com/RichCaloggero/react-test/blob/master/src/App.js


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
