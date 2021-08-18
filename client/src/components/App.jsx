import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import AppNav from './Nav.jsx';
import Welcome from './Welcome.jsx';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <AppNav />
    )
  }
}

export default App;