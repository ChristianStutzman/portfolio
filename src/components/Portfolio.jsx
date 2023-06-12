import React, { useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { render } from "react-dom";
import $ from "jquery";
import PortfolioModal from "./PortfolioModal.jsx";
import { GoBrowser } from "react-icons/go";
import { MdPointOfSale } from "react-icons/md";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiMui,
  SiShopify,
  SiSass,
  SiWordpress,
  SiCss3,
} from "react-icons/si";

const Portfolio = () => {
  const [openProject, setOpenProject] = useState(false);

  const handleClick = () => {
    $("#app").css({ height: "100vh" });
    $("#portfolio").animate({ top: "-500vh" }, 4000);
    $("#welcome-container").animate({ left: "0" }, 4000);
    setTimeout(() => {
      $("#portfolio").toggleClass("hide");
    }, 4000);
  };

  const handleClose = () => {
    setOpenProject(false);
  };

  return (
    <Container id="portfolio-container">
      <Row className="portfolio-btn-row">
        <Col md={2}>
          <div className="portfolio-btn-container">
            <div className="portfolio-btn" onClick={handleClick}>
              Home
            </div>
          </div>
        </Col>
      </Row>
      <Row id="portfolio-header-row">
        <Col align="center">
          <h2 id="portfolio-header">Portfolio</h2>
        </Col>
      </Row>
      <Row className="portfolio-row">
        <Col
          md={8}
          className="portfolio-card"
          onClick={() => setOpenProject("invoiceMaker")}
        >
          <Row className="portfolio-img-row">
            <Image
              className="portfolio-img"
              src="./assets/invoiceMaker/invoiceMaker-1.png"
            />
          </Row>
        </Col>
      </Row>
      <Row className="portfolio-row">
        <Col
          md={8}
          className="portfolio-card"
          onClick={() => setOpenProject("mylesPrice")}
        >
          <Row className="portfolio-img-row">
            <Image
              className="portfolio-img"
              src="./assets/mylesPrice/mylesPrice-1.png"
            />
          </Row>
        </Col>
      </Row>
      <Row className="portfolio-row">
        <Col
          md={8}
          className="portfolio-card"
          onClick={() => setOpenProject("pocketBarGuide")}
        >
          <Row className="portfolio-img-row">
            <Image
              className="portfolio-img"
              src="./assets/pocketBarGuide/pocketBarGuide-1.png"
            />
          </Row>
        </Col>
      </Row>
      <PortfolioModal
        show={openProject === "invoiceMaker"}
        handleClose={handleClose}
        heading="Invoice Maker"
        images={[
          "./assets/invoiceMaker/invoiceMaker-1.png",
          "./assets/invoiceMaker/invoiceMaker-2.png",
          "./assets/invoiceMaker/invoiceMaker-3.png",
          "./assets/invoiceMaker/invoiceMaker-4.png",
        ]}
        description="Invoice Maker, found at invoicemaker.com, is an online platform that simplifies the creation and management of invoices, estimates, and receipts for businesses and freelancers. With a user-friendly interface and customizable templates, it enables users to generate professional-looking invoices quickly. The platform offers features such as automatic calculations, support for multiple currencies, and various payment methods. It also includes invoice management tools for tracking, recording payments, and sending reminders. Security and data privacy are prioritized, ensuring the protection of sensitive information. Invoice Maker aims to streamline invoicing processes, allowing users to focus on their core activities and improve financial management."
        links={[
          {
            icon: <GoBrowser />,
            url: "https://app.invoicemaker.com",
            label: "View The App",
          },
          {
            icon: <MdPointOfSale />,
            url: "https://invoicemaker.com",
            label: "View The Marketing Site",
          },
        ]}
        builtWith={[
          {
            name: "JavaScript",
            icon: <SiJavascript />,
          },
          {
            name: "React",
            icon: <SiReact />,
          },
          {
            name: "Redux",
            icon: <SiRedux />,
          },
          {
            name: "Material-UI",
            icon: <SiMui />,
          },
        ]}
      />
      <PortfolioModal
        show={openProject === "mylesPrice"}
        handleClose={handleClose}
        heading="Myles Price"
        images={[
          "./assets/mylesPrice/mylesPrice-1.png",
          "./assets/mylesPrice/mylesPrice-2.png",
          "./assets/mylesPrice/mylesPrice-3.png",
          "./assets/mylesPrice/mylesPrice-4.png",
        ]}
        description="Myles Price is a Los Angeles-based clothing brand that focuses on LuxCasual apparel. Their Shopify-based website is designed to drive conversions through eCommerce and SEO strategies. With a sleek and user-friendly interface, the website aims to provide a seamless shopping experience. Myles Price is committed to delivering captivating aesthetics, easy navigation, and persuasive content to enhance customer engagement and facilitate transactions."
        links={[
          {
            icon: <GoBrowser />,
            url: "https://mylesprice.com",
            label: "View The Site",
          },
        ]}
        builtWith={[
          {
            name: "Liquid",
            icon: <SiShopify />,
          },
          {
            name: "JavaScript",
            icon: <SiJavascript />,
          },
          {
            name: "Sass",
            icon: <SiSass />,
          },
        ]}
      />
      <PortfolioModal
        show={openProject === "pocketBarGuide"}
        handleClose={handleClose}
        heading="Pocket Bar Guide"
        images={[
          "./assets/pocketBarGuide/pocketBarGuide-1.png",
          "./assets/pocketBarGuide/pocketBarGuide-2.png",
          "./assets/pocketBarGuide/pocketBarGuide-3.png",
        ]}
        description="Pocket Bar Guide is a work-in-progress WordPress website aiming to be the go-to destination for cocktail enthusiasts of all levels. From seasoned bartenders to home mixologists, Pocket Bar Guide will offer a wealth of mixology knowledge, featuring a wide range of drink recipes, expert tips, and insights into the latest trends. With a user-friendly interface and visually appealing design, this evolving website promises to be a captivating resource for discovering new and exciting cocktails."
        links={[
          {
            icon: <GoBrowser />,
            url: "https://pocketbarguide.com",
            label: "View The Site",
          },
        ]}
        builtWith={[
          {
            name: "WordPress",
            icon: <SiWordpress />,
          },
          {
            name: "JavaScript",
            icon: <SiJavascript />,
          },
          {
            name: "CSS",
            icon: <SiCss3 />,
          },
        ]}
      />
    </Container>
  );
};

export default Portfolio;
