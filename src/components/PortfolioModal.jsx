import React from "react";
import { Modal, Carousel, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";

const PortfolioModal = ({
  show,
  handleClose,
  heading,
  images,
  description,
  links,
  builtWith,
}) => (
  <Modal
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    show={show}
    className="portfolio-modal"
    onHide={handleClose}
  >
    <Modal.Header>
      <Modal.Title id="contained-modal-title-vcenter">{heading}</Modal.Title>
    </Modal.Header>
    <Modal.Body align="center">
      <Carousel className="portfolio-carousel" variant="dark">
        {images.map((image) => (
          <Carousel.Item key={image}>
            <img src={image} className="carousel-img" />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="carousel-description">
        <p>{description}</p>
      </div>
      <span>Built With:</span>
      <Row className="built-with">
        {builtWith?.map(({ name, icon }) => (
          <Col key={name}>
            {name} {icon}
          </Col>
        ))}
      </Row>
    </Modal.Body>
    <Modal.Footer>
      <Row className="portfolio-footer">
        <Col align="left" md={8} xs={12}>
          {links.map(({ icon, url, label }) => (
            <Button
              variant="contained"
              href={url}
              target="_blank"
              key={url}
              className="portfolio-link"
              startIcon={icon}
            >
              {label}
            </Button>
          ))}
        </Col>
      </Row>
      <Button variant="contained" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default PortfolioModal;
