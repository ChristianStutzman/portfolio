import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
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
        <Row id="portfolio-row-1">
          <Col md={3} className="portfolio-card">
            <span>Project</span>
          </Col>
        </Row>
      </Container>
    )
  }
}

render(<Portfolio />, document.getElementById('portfolio'));

export default Portfolio;