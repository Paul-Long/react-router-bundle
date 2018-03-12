import React from 'react';

class Bundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mod: null
    };
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    }
  }

  load(props) {
    this.setState({mod: null});
    props.load().then((mod) => {
      this.setState({mod: mod.default || mod});
    });
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}

export default Bundle;
