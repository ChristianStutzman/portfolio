import React, { Component } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { render } from 'react-dom';
import $ from 'jquery';
import PortfolioModal from './PortfolioModal.jsx';

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blackjack: false,
      catbird: false,
      neighbr: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(location) {
    $('#upper').css({height: '100vh'});
    if (location === 'home') {
      $('#portfolio').animate({top: '-500vh'}, 4000);
      $('#welcome-container').animate({left: '0'}, 4000);
    }
  }

  handleShow(modal) {
    let tempState = this.state;
    tempState[modal] = true;
    this.setState(tempState);
  }

  handleClose(modal) {
    let tempState = this.state;
    tempState[modal] = false;
    this.setState(tempState);
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
          <Col md={8} className="portfolio-card" onClick={() => this.handleShow('neighbr')}>
            <Row className="portfolio-img-row">
              <Image className="portfolio-img" src="./assets/neighbr/landing.png" />
            </Row>
          </Col>
        </Row>
        <Row className="portfolio-row">
          <Col md={8} className="portfolio-card" onClick={() => this.handleShow('catbird')}>
            <Row className="portfolio-img-row">
              <Image className="portfolio-img" src="./assets/catbird/Catbird-1.png" />
            </Row>
          </Col>
        </Row>
        <Row className="portfolio-row">
          <Col md={8} className="portfolio-card" onClick={() => this.handleShow('blackjack')}>
            <Row className="portfolio-img-row">
              <Image className="portfolio-img" src="./assets/blackjack/home.png" />
            </Row>
          </Col>
        </Row>
        <PortfolioModal
          show={this.state.catbird}
          handleClose={() => this.handleClose('catbird')}
          heading="Catbird"
          images={[
            './assets/catbird/Catbird-1.png',
            './assets/catbird/Catbird-2.png',
            './assets/catbird/Catbird-3.png'
          ]}
        />
        <PortfolioModal
          show={this.state.neighbr}
          handleClose={() => this.handleClose('neighbr')}
          heading="Neighbr"
          images={[
            './assets/neighbr/landing.png',
            './assets/neighbr/Neighbr-1.png',
            './assets/neighbr/Neighbr-2.png',
            './assets/neighbr/Neighbr-3.png',
            './assets/neighbr/Neighbr-4.png',
            './assets/neighbr/Neighbr-5.png',
            './assets/neighbr/Neighbr-Mobile-1.png',
            './assets/neighbr/Neighbr-Mobile-2.png'
          ]}
        />
        <PortfolioModal
          show={this.state.blackjack}
          handleClose={() => this.handleClose('blackjack')}
          heading="Blackjack"
          images={[
            './assets/blackjack/home.png',
            './assets/blackjack/blackjack-1.png',
            './assets/blackjack/blackjack-2.png',
            './assets/blackjack/blackjack-3.png',
            './assets/blackjack/blackjack-4.png',
          ]}
        />
      </Container>
    )
  }
}

render(<Portfolio />, document.getElementById('portfolio'));

export default Portfolio;