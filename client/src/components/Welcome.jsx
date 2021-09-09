import React, { Component, useEffect } from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';
import { render } from 'react-dom';
import $ from 'jquery';
import renderParticles from './particles.js';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickDisabled: false
    }
  }


  componentDidMount() {
    setTimeout(() => {
      $('#hello-txt').animate({opacity: '100%'}, 2500);
    }, 1000)
  }

  handleClick(location) {
    if (!this.state.clickDisabled) {
      this.setState({clickDisabled: true});
      if (location === 'portfolio') {
        $('#welcome-container').animate({left: '-100vw'}, 2000);
        $('#portfolio').toggleClass('hide');
        $('#portfolio').animate({top: '0'}, 4000);
        $('#app').css({height: '300vh'}, 2000);
      } else if (location === 'skills') {
        $('#welcome-container').animate({left: '-100vw'}, 2000);
        $('#skills').toggleClass('hide');
        $('#skills').animate({left: '0'}, 2000);
        let height;
        if (window.innerWidth <= 375) {
          height = '1000vw';
        } else if (window.innerWidth <= 475) {
          height = '750vw';
        } else if (window.innerWidth <= 505) {
          height = '550vw';
        } else if (window.innerWidth <= 768) {
          height = '350vw';
        } else if (window.innerWidth <= 1045) {
          height = '175vw';
        }
        $('#app').css({height: height}, 2000);
      } else if (location === 'about') {
        $('#welcome-container').animate({left: '-100vw'}, 3000);
        $('#about').toggleClass('hide');
        $('#about').animate({top: '0'}, 3000);
        if (window.innerWidth <= 1050) {
          $('#app').css({height: 'calc(280vh - 45vw)'}, 3000);
        }
      }

      setTimeout(() => {
        this.setState({clickDisabled: false})
      }, 2000);
    }
  }

  render() {
    return (
      <Container align="center" id="welcome-container">
        <Row id="hello">
          <div id="hello-container" >
            <span id="hello-txt">Hello</span>
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
            <div className="portfolio-btn" onClick={() => this.handleClick('about')}>About</div>
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



export default Welcome;
