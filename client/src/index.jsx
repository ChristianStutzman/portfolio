import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import './components/particles.js';


render(
<React.Fragment>
  <div id="particles-js"></div>
  <App />
</React.Fragment>, document.getElementById('app'));