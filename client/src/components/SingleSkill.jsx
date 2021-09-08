import React from 'react';
import { Row, Col } from 'react-bootstrap';

const SingleSkill = (props) => {
  return (
    <Row className="single-skill-row">
      <div className="portfolio-btn-container">
        <div className="portfolio-btn single-skill">
          <Row>
            <Col align="center" md={2}>
              {props.icon}
            </Col>
            <Col className="text-center" md={10}>
              {props.label}
            </Col>
          </Row>
        </div>
      </div>
    </Row>
  )
}

export default SingleSkill;