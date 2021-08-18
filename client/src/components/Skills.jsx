import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Skills = (props) => {
  return (
    <Container id="skills-container">
      <Row align="center">
        <h2>Skills</h2>
      </Row>
      <Row>
        <Col className="skill-icon">
          <Row align="center" className="skill-icon-top">
            <i className="fab fa-js skill"></i>
          </Row>
          <Row align="center" className="skill-icon-bottom">
            <span className="skill-text">Javascript</span>
          </Row>
        </Col>
        <Col className="skill-icon">
          <Row align="center" className="skill-icon-top">
            <i className="fas fa-database skill"></i>
          </Row>
          <Row align="center" className="skill-icon-bottom">
            <span className="skill-text">Databases</span>
          </Row>
        </Col>
        <Col className="skill-icon">
          <Row align="center" className="skill-icon-top">
            <i className="fab fa-node skill"></i>
          </Row>
          <Row align="center" className="skill-icon-bottom">
            <span className="skill-text">NodeJS</span>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="skill-icon">
          <Row align="center" className="skill-icon-top">
            <i className="fab fa-react skill"></i>
          </Row>
          <Row align="center" className="skill-icon-bottom">
            <span className="skill-text">React</span>
          </Row>
        </Col>
        <Col className="skill-icon">
          <Row align="center" className="skill-icon-top">
            <i className="fab fa-aws skill"></i>
          </Row>
          <Row align="center" className="skill-icon-bottom">
            <span className="skill-text">Deployment</span>
          </Row>
        </Col>
        <Col className="skill-icon">
          <Row align="center" className="skill-icon-top">
            <i className="fab fa-node skill"></i>
          </Row>
          <Row align="center" className="skill-icon-bottom">
            <span className="skill-text">NodeJS</span>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Skills;