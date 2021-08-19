import React, { Component, useEffect } from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';
import { render } from 'react-dom';
import $ from 'jquery';

class Welcome extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    // setTimeout(() => {
    //   setTimeout(function() {
    //     $('#hello-txt').addClass('fadeIn');
    //   }, 1500);
    //   setTimeout(function() {
    //     $('#hello-txt').removeClass('hide');
    //   }, 1500);

    //   $('#hello').addClass('animate-hello');

    //   $('#hello-container').fadeOut(100).delay(2800).fadeIn();

    //   setTimeout(function() {
    //     $('#hello').removeClass('animate-hello');
    //   }, 3200);

    //   //remove fadeIn class after 1500ms
    //   setTimeout(function() {
    //     $('#hello-txt').removeClass('fadeIn');
    //   }, 1500);
    // }, 500)
  }

  handleClick(location) {
    if (location === 'portfolio') {
      $('#welcome-container').animate({left: '-100vw'}, 2000);
      $('#portfolio').animate({top: '0'}, 2000);
    } else if (location === 'skills') {
      $('#welcome-container').animate({left: '-100vw'}, 2000);
      $('#skills').animate({left: '0'}, 2000);
    }
  }

  render() {
    return (
      <Container align="center" id="welcome-container">
        <Row id="hello">
          <div id="hello-container" >
            <span id="hello-txt" >Hello</span>
          </div>
        </Row>
        <Row>
          <div id="welcome-div">My name is <span className="highlight" id="welcome-name">Christian Stutzman</span></div>
          <span>I am a fullstack software engineer</span>
        </Row>
        <br></br>
        <Row id="welcome-btn-row">
          <Col>
          <div className="portfolio-btn-container">
            <div className="portfolio-btn" onClick={() => this.handleClick('portfolio')}>Portfolio</div>
          </div>
          </Col>
          <Col>
          <div className="portfolio-btn-container">
            <div className="portfolio-btn" onClick={() => this.handleClick('skills')}>Skills</div>
          </div>
          </Col>
        </Row>
        <Row id="social-row">
          <Col>
            <a href="mailto:christian.stutzman01@gmail.com?subject=We are the droids you're looking for!">
              <i className="far fa-envelope social"></i>
            </a>
          </Col>
          <Col>
            <a href="https://github.com/ChristianStutzman" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github social"></i>
            </a>
          </Col>
          <Col>
            <a href="https://www.linkedin.com/in/christianstutzman/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin social"></i>
            </a>
          </Col>
        </Row>
      </Container>
    )
  }
}

render(<Welcome />, document.getElementById('welcome'));

export default Welcome;
