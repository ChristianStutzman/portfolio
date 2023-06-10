import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import renderParticles from "./components/particles.js";
import Welcome from "./components/Welcome.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";

render(
  <React.Fragment>
    <div id="particles-js"></div>
    <div id="welcome">
      <Welcome />
    </div>
    <div id="portfolio" className="hide">
      <Portfolio />
    </div>
    <div id="skills" className="hide">
      <Skills />
    </div>
    <div id="about" className="hide">
      <About />
    </div>
  </React.Fragment>,
  document.getElementById("app")
);

renderParticles();
