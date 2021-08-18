import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import AppNav from './Nav.jsx';
import Welcome from './Welcome.jsx';
import Portfolio from './Portfolio.jsx';
import Skills from './Skills.jsx';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <AppNav />
        <Skills />
        <Portfolio />
      </React.Fragment>
    )
  }
}

export default App;