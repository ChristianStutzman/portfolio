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
  >
    <Modal.Header>
      <Modal.Title id="contained-modal-title-vcenter">
        {props.heading}
      </Modal.Title>
    </Modal.Header>
      <Modal.Body align="center">
        <Carousel className="portfolio-carousel">
          {props.images.map(image => (
            <Carousel.Item>
              <img src={image} className="carousel-img"/>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
  </Modal>
  </div>
)

export default PortfolioModal;