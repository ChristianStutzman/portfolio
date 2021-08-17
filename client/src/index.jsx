import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import './components/particles.js';

// particlesJS.load('particles-js', '../../../particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

render(<App />, document.getElementById('app'));