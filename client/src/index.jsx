import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
// import App from './components/App.jsx';
import renderParticles from './components/particles.js';
import Welcome from './components/Welcome.jsx';
const Portfolio = lazy(() => import('./components/Portfolio.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
const About = lazy(() => import('./components/About.jsx'));
// import Portfolio from './components/Portfolio.jsx';
// import Skills from './components/Skills.jsx';
// import About from './components/About.jsx';



render(
  <React.Fragment>
    <div id="particles-js"></div>
    <div id="welcome">
      <Welcome />
    </div>
    <div id="portfolio">
      <Suspense fallback={<h2>Loading...</h2>}>
        <Portfolio />
      </Suspense>
    </div>
    <div id="skills">
      <Suspense fallback={<h2>Loading...</h2>}>
        <Skills />
      </Suspense>
    </div>
    <div id="about">
      <Suspense fallback={<h2>Loading...</h2>}>
        <About />
      </Suspense>
    </div>
  </React.Fragment>, document.getElementById('app')
)

renderParticles();