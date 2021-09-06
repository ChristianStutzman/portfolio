import React, { Component } from 'react';
import { render } from 'react-dom';
import { Col, Row, Image } from 'react-bootstrap';
import $ from 'jquery';

class About extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(location) {
    if (location === 'home') {
      $('#about').animate({top: '200vh'}, 2000);
      $('#welcome-container').animate({left: '0'}, 2000);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Row id="about-btn-row">
          <Col md={2}>
            <div className="portfolio-btn-container">
              <div className="portfolio-btn" onClick={() => this.handleClick('home')}>Home</div>
            </div>
          </Col>
        </Row>
        <Row align="center" id="about-header-row">
          <Col>
            <h2 id="about-header">About</h2>
          </Col>
        </Row>
        <Row id="about-img-row">
          <Col sm={12} md={5}>
            <Image id="about-img" src="https://i.ytimg.com/vi/u2FhlVPvsU4/maxresdefault.jpg" />
          </Col>
          <Col id="about-text">
            <p>Hi, my name is Christian, and I am a software engineer.</p>
            <p>Software engineering was something that I had always been told I could be good at, and as soon as I started writing code, I immediately knew that this was something I wanted to pursue as a career. It played into all of the strengths I had acquired over the years in the service industry, from teamwork and communication to my business acumen from undergrad.</p>
            <p>I love how this is a field where you can build things that can change the world out of nothing but a computer and a text editor. But most of all, I love that this is a field that is constantly changing and evolving, and to keep up you need to be in a state of constant learning and innovation. For the future I envision myself in a full-time software engineering role, where I can continue to pursue my dreams of creating unique, full-stack applications that focus on delivering the greatest possible experience for the users that interact with them.</p>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

render(<About />, document.getElementById('about'));

export default About