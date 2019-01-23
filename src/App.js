import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import threeBind from './threejs/binder';


class App extends Component {

  /**
   * Invoked immediately after a component is mounted (after inserted into the tree)
   */
  componentDidMount() {
    threeBind(this.threeRootElement);
  }

  /**
   * Top level component to render to the dom.
   * @ref will return the specified threeRootElement specified
   * @className lement with a specified property className, a React feature to grab css properties easily.
   */
  render() {
    return (
      <div className="header-header" ref={element => this.threeRootElement = element} ></div>
    );

  }
}

export default App;
