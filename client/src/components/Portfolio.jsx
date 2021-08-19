import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { render } from 'react-dom';
import $ from 'jquery';

class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(location) {
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
        <Row>
          <Col align="center">
            <h2 id="portfolio-header">Portfolio</h2>
          </Col>
        </Row>
        <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/100x160" className="card-img"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/100x160" className="card-img"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/100x160" className="card-img"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/100x160" className="card-img"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
      </Container>
    )
  }
}

render(<Portfolio />, document.getElementById('portfolio'));

export default Portfolio;