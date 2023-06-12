import React, { Component } from "react";
import { render } from "react-dom";
import { Col, Row, Image } from "react-bootstrap";
import $ from "jquery";

class About extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(location) {
    $("#about").animate({ top: "500vh" }, 3000);
    $("#welcome-container").animate({ left: "0" }, 3000);
    $("#app").css({ height: "100vh" }, 3000);
    setTimeout(() => {
      $("#about").toggleClass("hide");
    }, 3000);
  }

  render() {
    return (
      <React.Fragment>
        <Row id="about-btn-row">
          <Col md={2}>
            <div className="portfolio-btn-container">
              <div
                className="portfolio-btn"
                onClick={() => this.handleClick("home")}
              >
                Home
              </div>
            </div>
          </Col>
        </Row>
        <Row align="center" id="about-header-row">
          <Col>
            <h2 id="about-header">About</h2>
          </Col>
        </Row>
        <Row id="about-img-row">
          <Col sm={12} md={5} align="center" id="about-img-col">
            <Image id="about-img" src="./assets/Headshot.png" />
          </Col>
          <Col id="about-text">
            <p>
              Hi, I'm Christian, a dedicated software engineer with a passion
              for crafting innovative solutions. From the moment I started
              coding, I knew it was the career path I had been seeking. With a
              strong foundation in JavaScript, React, Node.js, and databases
              like PostgreSQL and MongoDB, I thrive on the challenge of creating
              exceptional user experiences.
            </p>

            <p>
              My experience spans various roles, including serving as a
              Front-End Web Developer at Invoice Maker LLC. In this position, I
              successfully managed interns, orchestrated targeted sprints, and
              collaborated with prominent third-party services like Stripe,
              Square, and PayPal to integrate secure payment methods.
              Additionally, I designed and implemented new product features,
              ranging from localization and custom account pages to estimates
              and receipts.
            </p>

            <p>
              In my current role as a Web Developer at Myles Price, I actively
              contribute to website optimization, leveraging my design and
              problem-solving skills to deliver impactful solutions. I've
              independently redesigned the homepage to improve customization
              options and SEO performance. Moreover, I've refined website schema
              and URL structures to elevate SEO performance and enhance Google
              rankings.
            </p>

            <p>
              With a solid background in business management, I bring a
              well-rounded perspective to my work. Let's collaborate and make a
              positive impact through innovative software solutions.
            </p>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default About;
