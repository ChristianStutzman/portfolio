import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { render } from 'react-dom';
import $ from 'jquery';
import { TransitionGroup, CSSTransition, Transition } from 'react-transition-group';
import {
  SiRedux,
  SiMaterialUi,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiJest,
  SiMocha,
  SiGooglechrome,
  SiHeroku,
  SiWebpack,
  SiBabel,
  SiVim,
  SiPostman
} from 'react-icons/si';
import { WiCloudy } from 'react-icons/wi';
import { DiScrum } from 'react-icons/di';
import { BiTransfer } from 'react-icons/bi';
import SingleSkill from './SingleSkill.jsx';

const skills = {
  frontEnd: [
    {
      icon: <i className="fab fa-js"></i>,
      label: 'JavaScript'
    },
    {
      icon: <i className="fab fa-react"></i>,
      label: 'React'
    },
    {
      icon: <SiRedux />,
      label: 'Redux'
    },
    {
      icon: <i className="fab fa-html5"></i>,
      label: 'HTML5'
    },
    {
      icon: <i className="fab fa-css3-alt"></i>,
      label: 'CSS3'
    },
    {
      icon: <i className="fab fa-bootstrap"></i>,
      label: 'Bootstrap'
    },
    {
      icon: <SiMaterialUi />,
      label: 'Material-UI'
    }
  ],
  backEnd: [
    {
      icon: <i className="fab fa-node-js"></i>,
      label: 'NodeJS'
    },
    {
      icon: <i className="fas fa-server"></i>,
      label: 'Express'
    },
    {
      icon: <SiPostgresql />,
      label: 'PostgreSQL'
    },
    {
      icon: <SiMongodb />,
      label: 'MongoDB'
    },
    {
      icon: <SiMysql />,
      label: 'MySQL'
    },
    {
      icon: <SiFirebase />,
      label: 'Firebase'
    },
    {
      icon: <BiTransfer />,
      label: 'RESTful API Development'
    }
  ],
  deployment: [
    {
      icon: <SiJest />,
      label: 'Jest'
    },
    {
      icon: <SiMocha />,
      label: 'Mocha'
    },
    {
      icon: <i className="fas fa-coffee" aria-hidden="true"></i>,
      label: 'Chai'
    },
    {
      icon: <WiCloudy />,
      label: 'New Relic'
    },
    {
      icon: <i className="fab fa-aws"></i>,
      label: 'AWS'
    },
    {
      icon: <SiHeroku />,
      label: 'Heroku'
    },
    {
      icon: <i className="fab fa-docker"></i>,
      label: 'Docker'
    }
  ],
  tools: [
    {
      icon: <i className="fab fa-git-alt"></i>,
      label: 'Git'
    },
    {
      icon: <i className="fab fa-npm"></i>,
      label: 'NPM'
    },
    {
      icon: <SiWebpack />,
      label: 'Webpack'
    },
    {
      icon: <SiBabel />,
      label: 'Babel'
    },
    {
      icon: <SiPostman />,
      label: 'Postman'
    },
    {
      icon: <SiVim />,
      label: 'VIM'
    },
    {
      icon: <DiScrum />,
      label: 'Scrum'
    }
  ]
}



class Skills extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(location) {
    if (location === 'home') {
      $('#skills').animate({left: '200vw'}, 2000);
      $('#welcome-container').animate({left: '0'}, 2000);
    }
  }

  render() {
    return (
      <Container id="skills-container">
        <Row className="portfolio-btn-row skills-btn-row">
          <Col md={2}>
            <div className="portfolio-btn-container">
              <div className="portfolio-btn" onClick={() => this.handleClick('home')}>Home</div>
            </div>
          </Col>
        </Row>
        <Row align="center" id="skills-header-row">
          <h2>Skills</h2>
        </Row>
        <Row>
          <Col>
            <Row align="center">
              <h3>Front End</h3>
            </Row>
            <hr className="skills-break"/>
            {skills.frontEnd.map(skill => (
              <SingleSkill
                icon={skill.icon}
                label={skill.label}
                key={`skill-${skill.label}`}
              />
            ))}
          </Col>
          <Col>
            <Row align="center">
              <h3>Back End</h3>
            </Row>
            <hr className="skills-break"/>
            {skills.backEnd.map(skill => (
              <SingleSkill
                icon={skill.icon}
                label={skill.label}
                key={`skill-${skill.label}`}
              />
            ))}
          </Col>
          <Col>
            <Row align="center">
              <h3>Testing/Deployment</h3>
            </Row>
            <hr className="skills-break"/>
            {skills.deployment.map(skill => (
              <SingleSkill
                icon={skill.icon}
                label={skill.label}
                key={`skill-${skill.label}`}
              />
            ))}
          </Col>
          <Col>
            <Row align="center">
              <h3>Developer Tools</h3>
            </Row>
            <hr className="skills-break"/>
            {skills.tools.map(skill => (
              <SingleSkill
                icon={skill.icon}
                label={skill.label}
                key={`skill-${skill.label}`}
              />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}

// render(<Skills />, document.querySelector('#skills'));

export default Skills;