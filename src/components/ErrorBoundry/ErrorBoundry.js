import React, { Component } from 'react';
import Error from '../Error/Error';


export default class ErrorBounndry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  };

  render () {
    return this.state.hasError ? <Error /> : this.props.children;
  }
};