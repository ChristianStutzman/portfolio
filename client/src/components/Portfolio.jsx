import React, { Component } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { render } from 'react-dom';
import $ from 'jquery';

class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(location) {
    $('#upper').css({height: '100vh'});
    if (location === 'home') {
      $('#portfolio').animate({top: '-200vh'}, 2000);
      $('#welcome-container').animate({left: '0'}, 2000);
    }
  }

  render() {
    return (
      <Container id="portfolio-container">
        <Row className="portfolio-btn-row">
          <Col md={2}>
            <div className="portfolio-btn-container">
              <div className="portfolio-btn" onClick={() => this.handleClick('home')}>Home</div>
            </div>
          </Col>
        </Row>
        <Row id="portfolio-header-row">
          <Col align="center">
            <h2 id="portfolio-header">Portfolio</h2>
          </Col>
        </Row>
        <Row className="portfolio-row">
          <Col md={5} className="portfolio-card">
            <Row className="portfolio-img-row">
              <Image className="portfolio-img" src="./assets/neighbr/landing.png" />
            </Row>
            {/* <span>Neighbr</span> */}
          </Col>
          <Col md={{span:5, offset:2}} className="portfolio-card">
            <Row className="portfolio-img-row">
              <Image className="portfolio-img" src="./assets/catbird/Catbird-1.png" />
            </Row>
            {/* <span>Project 2</span> */}
          </Col>
        </Row>
        <Row className="portfolio-row">
          <Col md={5} className="portfolio-card">
            <Row className="portfolio-img-row">
              <Image className="portfolio-img" src="./assets/blackjack/home.png" />
            </Row>
            {/* <span>Project</span> */}
          </Col>
          <Col md={{span:5, offset:2}} className="portfolio-card">
            <Row className="portfolio-img-row">
              <Image className="portfolio-img" src="https://i.ytimg.com/vi/u2FhlVPvsU4/maxresdefault.jpg" />
            </Row>
            <span>Project 2</span>
          </Col>
        </Row>
      </Container>
    )
  }
}

render(<Portfolio />, document.getElementById('portfolio'));

export default Portfolio;