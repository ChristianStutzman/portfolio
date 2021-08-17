import React, { Component } from 'react';
import AppNav from './Nav.jsx';
// import '../../../particles.js';
//const particleJS = pJS();

// particlesJS.load('particles-js', '../../../particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });


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