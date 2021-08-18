import React, { Component } from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';
import { render } from 'react-dom';
import $ from 'jquery';

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    $('html,body').animate({
      scrollTop: $("#navbar").offset().top},
      'slow');
  }

  render() {
    return (
      <Container id="welcome-container">
          <Row>
            <div>Welcome, my name is <span className="highlight">Christian Stutzman</span></div>
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
      </Container>
    )
  }
}

render(<Welcome />, document.getElementById('welcome'));

export default Welcome;
