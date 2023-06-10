import React, { Component } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { render } from 'react-dom';
import $ from 'jquery';
import PortfolioModal from './PortfolioModal.jsx';
import { SiHeroku } from 'react-icons/si';

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
    $('#app').css({height: '100vh'});
    if (location === 'home') {
      $('#portfolio').animate({top: '-500vh'}, 4000);
      $('#welcome-container').animate({left: '0'}, 4000);
      setTimeout(() => {
        $('#portfolio').toggleClass('hide')
      }, 4000);
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
              <Image className="portfolio-img" src="./assets/neighbr/landing.webp" />
            </Row>
          </Col>
        </Row>
        <Row className="portfolio-row">
          <Col md={8} className="portfolio-card" onClick={() => this.handleShow('catbird')}>
            <Row className="portfolio-img-row">
              <Image className="portfolio-img" src="./assets/catbird/Catbird-1.webp" />
            </Row>
          </Col>
        </Row>
        <Row className="portfolio-row">
          <Col md={8} className="portfolio-card" onClick={() => this.handleShow('blackjack')}>
            <Row className="portfolio-img-row">
              <Image className="portfolio-img" src="./assets/blackjack/home.webp" />
            </Row>
          </Col>
        </Row>
        <PortfolioModal
          show={this.state.catbird}
          handleClose={() => this.handleClose('catbird')}
          heading="Catbird"
          images={[
            './assets/catbird/Catbird-1.webp',
            './assets/catbird/Catbird-2.webp',
            './assets/catbird/Catbird-3.webp'
          ]}
          description="Catbird is a React-Redux application allowing users to view clothing items/collections in an online store setting. It utilizes an API server interacting with PostgreSQL database to supply and store relevant information to the front-end"
          links={[
            {
              icon: <i className="fab fa-github"></i>,
              url: 'https://github.com/ChristianStutzman/Catbird',
              label: 'Front End'
            },
            {
              icon: <i className="fab fa-github"></i>,
              url: 'https://github.com/ChristianStutzman/SDC-Products',
              label: 'Back End'
            }
          ]}
        />
        <PortfolioModal
          show={this.state.neighbr}
          handleClose={() => this.handleClose('neighbr')}
          heading="Neighbr"
          images={[
            './assets/neighbr/landing.webp',
            './assets/neighbr/Neighbr-1.webp',
            './assets/neighbr/Neighbr-2.webp',
            './assets/neighbr/Neighbr-3.webp',
            './assets/neighbr/Neighbr-4.webp',
            './assets/neighbr/Neighbr-5.webp',
            './assets/neighbr/Neighbr-Mobile-1.webp',
            './assets/neighbr/Neighbr-Mobile-2.webp'
          ]}
          description="Neighbr is a full stack application designed to connect users to members of their own community in an online forum. It features a robust landing page with effective copy to engage users, a main forum feed where users can post and view information, and a direct messaging system."
          links={[
            {
              icon: <i className="fab fa-github"></i>,
              url: 'https://github.com/ChristianStutzman/Neighbr',
              label: 'View On GitHub'
            }
          ]}
        />
        <PortfolioModal
          show={this.state.blackjack}
          handleClose={() => this.handleClose('blackjack')}
          heading="Blackjack"
          images={[
            './assets/blackjack/home.webp',
            './assets/blackjack/blackjack-1.webp',
            './assets/blackjack/blackjack-2.webp',
            './assets/blackjack/blackjack-3.webp',
            './assets/blackjack/blackjack-4.webp',
          ]}
          description="Blackjack is a standard blackjack application allowing users to place bets and play against the dealer. Users can then post their high scores on a competitive leaderboard."
          links={[
            {
              icon: <i className="fab fa-github"></i>,
              url: 'https://github.com/ChristianStutzman/blackjack',
              label: 'View On Github'
            },
            {
              icon: <SiHeroku />,
              url: 'https://blackjack-christian-stutzman.herokuapp.com/',
              label: 'Try It Out!'
            }
          ]}
        />
      </Container>
    )
  }
}



export default Portfolio;