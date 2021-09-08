import React from 'react';
import { Modal, Carousel, Button, Row, Col } from 'react-bootstrap';


const PortfolioModal = (props) => (
  <div>
  <Modal
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    show={props.show}
    className="portfolio-modal"
    onHide={props.handleClose}
  >
    <Modal.Header>
      <Modal.Title id="contained-modal-title-vcenter">
        {props.heading}
      </Modal.Title>
    </Modal.Header>
      <Modal.Body align="center">
        <Carousel className="portfolio-carousel" variant="dark">
          {props.images.map(image => (
            <Carousel.Item key={image}>
              <img src={image} className="carousel-img"/>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="carousel-description">
          <p>{props.description}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Row className="portfolio-footer">
          <Col align="left" md={8} xs={12}>
            {props.links.map(link => (
              <Button
                variant="dark"
                href={link.url}
                target="_blank"
                key={link.url}
                className="portfolio-link"
              >
                {link.icon}  {link.label}
              </Button>
            ))}
          </Col>
          <Col align="right">
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
  </Modal>
  </div>
)

export default PortfolioModal;