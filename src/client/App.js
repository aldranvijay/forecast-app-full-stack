import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  
  render() {
    const links = this.props.children;
    return (
      <div>
       {links}
      </div>
    );
  }
}
