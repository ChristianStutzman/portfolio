import React, { Component } from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';
import { render } from 'react-dom';
import $ from 'jquery';

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    // $('html,body').animate({
    //   scrollTop: $("#portfolio-header").offset().top},
    //   'slow');

    //document.getElementById('welcome-container').classList.add('remove-welcome');

    $('#welcome-container').animate({left: '-100vw'}, 2000);
    $('#portfolio').animate({top: '0'}, 2000);
  }

  render() {
    return (
      <Container align="center" id="welcome-container">
        <Row>
          <div id="welcome-div">Welcome, my name is <span className="highlight" id="welcome-name">Christian Stutzman</span></div>
          <span>I am a fullstack software engineer</span>
        </Row>
        <br></br>
        <Row>
          <Col>
          <div id="portfolio-btn-container">
            <div id="portfolio-btn" onClick={this.handleClick}>Portfolio</div>
          </div>
          </Col>
        </Row>
        <Row id="social-row">
          <Col>
            <i className="far fa-envelope social"></i>
          </Col>
          <Col>
            <i className="fab fa-github social"></i>
          </Col>
          <Col>
            <i className="fab fa-linkedin social"></i>
          </Col>
        </Row>
      </Container>
    )
  }
}

render(<Welcome />, document.getElementById('welcome'));

export default Welcome;
