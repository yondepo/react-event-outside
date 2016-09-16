## ReactEventOutside   [![Build Status](https://travis-ci.org/yondepo/react-event-outside.svg?branch=master)](https://travis-ci.org/yondepo/react-event-outside) [![npm version](https://badge.fury.io/js/react-event-outside.svg)](https://badge.fury.io/js/react-event-outside)

A Higher Order Component for listening mouse events outside of the component

It's uses callback refs instead of ``` ReactDOM.findDOMNode() ``` ([why](https://github.com/yannickcr/eslint-plugin-react/issues/678#issue-165177220)).


## Usage


Installation
```
npm install react-event-outside --save
```


Basic usage:
```js
ReactEventOutside()(Component) /* listening for default "click" event */
ReactEventOutside(['wheel', 'dblclick'])(Component) /* listening for "wheel" and "dblclick" events */
```


Using ES6:
```js
import React from 'react';
import ReactEventOutside from 'react-event-outside';

class ShareArea extends React.Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e) {
    /* your code */
  }

  render() {
    return <div>Nothing here...</div>
    );
  }
}

export default ReactEventOutside()(ShareArea);

```


Using ES7 decorator:
```js
import React from 'react';
import ReactEventOutside from 'react-event-outside';

@ReactEventOutside()
class ShareArea extends React.Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e) {
    /* your code */
  }

  render() {
    return <div>Nothing here...</div>
    );
  }
}

export default ShareArea;

```

## Notes

* If ```handleEvent``` isn't implemented, nothing would happen.

## License
MIT
