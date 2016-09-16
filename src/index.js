import React from 'react';
import ReactDOM from 'react-dom';

export default (Target, events) => {
  return class ReactEventOutside extends React.Component {
    constructor(props) {
      super(props);

      this.handleEvent = this.handleEvent.bind(this);
    }

    componentDidMount() {}

    componentWillUnmount() {}

    handleEvent(e) {

    }

    render() {
      return <Target {...this.props} ref={node => this.node = node} />;
    }
  };
};
