import React, { Component } from 'react';
import { render } from 'react-dom';
import { Col, Row, Image } from 'react-bootstrap';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Row align="center" id="about-header-row">
          <Col>
            <h2 id="about-header">About</h2>
          </Col>
        </Row>
        <Row>
          <Image src="https://i.ytimg.com/vi/u2FhlVPvsU4/maxresdefault.jpg" />
        </Row>
      </React.Fragment>
    )
  }
}

render(<About />, document.getElementById('about'));

export default About