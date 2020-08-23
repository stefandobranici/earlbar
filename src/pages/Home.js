import React from "react";
import Carousel from "../components/carousel/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import { homePageContent } from "../repository/content";
import LineBreak from "../components/LineBreak";
import ReservationForm from "../components/ReservationForm";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import ShishaMenu from "../components/ShishaMenu";
import ImageGallery from "../components/image-gallery/ImageGallery";
import { subGallery } from "../repository/gallery";

export const Home = () => {
  return (
    <div>
      <Carousel />
      <Container fluid="lg" className="home-header">
        <Row className="justify-content-center">
          <Col xs={12} lg={7} className="justify-content-center">
            <Row className="justify-content-center">
              <Col>
                <h1>{homePageContent.mainHeaderTitle}</h1>
                <LineBreak />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={7}>
                <p>{homePageContent.mainHeaderDescription}</p>
              </Col>
              <Col xs={5}>
                <Row>
                  <Col>
                    <h3>
                      <AiOutlineFieldTime style={{ color: "#af9a7d" }} /> When
                    </h3>
                    <h6>Monday - Thursday </h6>
                    <p>6PM - 12AM</p>
                    <h6>Friday</h6>
                    <p>6PM - 1AM</p>
                    <h6>Saturday</h6>
                    <p>12PM - 2AM</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>
                      <GoLocation style={{ color: "#af9a7d" }} /> Where
                    </h3>
                    <h6>10 Manvers St Bath BA1 1JQ</h6>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col
            xs={12}
            md={8}
            lg={5}
            className="justify-content-center col-reservation-form"
          >
            <ReservationForm className />
          </Col>
        </Row>
      </Container>
      <Container fluid className="home-shisha-section">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} className="home-shisha-section-col">
            <h1>{homePageContent.shishaSectionTitle}</h1>
            <div className="vertical-line-banner"></div>
            <p>{homePageContent.shishaSectionDescription}</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="home-prices-section">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} className="home-prices-section-col">
            <h1>{homePageContent.pricesSectionTitle}</h1>
            <div className="vertical-line-banner"></div>
            <p>{homePageContent.pricesSectionDescription}</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={10} md={3} className="home-prices-section-col-drinks">
            <h3>Cocktails</h3>
            <h1>2 for £12</h1>
            <h6>1 for £7</h6>
          </Col>
          <Col xs={10} md={3} className="home-prices-section-col-drinks">
            <h3>Shooters</h3>
            <h1>5 for £12</h1>
            <h6>1 for £3</h6>
          </Col>
          <Col xs={10} md={3} className="home-prices-section-col-drinks">
            <h3>Shishas</h3>
            <h1>2 Flavours for £14</h1>
            <h6>More flavours at an extra cost</h6>
          </Col>
        </Row>
      </Container>
      <ShishaMenu />
      <Container fluid className="home-gallery-section">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} className="home-prices-section-col">
            <h1>{homePageContent.gallerySectionTitle}</h1>
            <div className="vertical-line-banner"></div>
            <p>{homePageContent.gallerySectionDescription}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ImageGallery gallery={subGallery} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
