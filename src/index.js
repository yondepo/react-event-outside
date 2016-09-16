import React from 'react';

export default (events = ['click']) => Target =>
  class ReactEventOutside extends React.Component {
    constructor(props) {
      super(props);

      this.handleEvent = this.handleEvent.bind(this);
    }

    componentDidMount() {
      events.forEach(event => document.addEventListener(event, this.handleEvent, true));
    }

    componentWillUnmount() {
      events.forEach(event => document.removeEventListener(event, this.handleEvent, true));
    }

    handleEvent(e) {
      if ((!this.wrap || !this.wrap.contains(e.target)) &&
        typeof this.target.handleEvent === 'function') {
        this.target.handleEvent(e);
      }
    }

    render() {
      return (
        <div ref={node => this.wrap = node}>
          <Target {...this.props} ref={node => this.target = node} />
        </div>
      );
    }
  };
