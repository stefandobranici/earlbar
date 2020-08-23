import React from "react";
import Carousel from "../components/carousel/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import { homePageContent } from "../repository/content";
import LineBreak from "../components/LineBreak";
import ReservationForm from "../components/ReservationForm";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiBottleVapors } from "react-icons/gi";

export const Home = () => {
  return (
    <div>
      <Carousel />
      <Container fluid="lg" className="home-header">
        <Row>
          <Col md={12} lg={7}>
            <Row>
              <Col>
                <h1>{homePageContent.mainHeaderTitle}</h1>
                <LineBreak />
              </Col>
            </Row>
            <Row>
              <Col xs={7}>
                <p>{homePageContent.mainHeaderDescription}</p>
              </Col>
              <Col xs={5}>
                <Row>
                  <Col>
                    <h3>
                      <AiOutlineFieldTime style={{ color: "#af9a7d" }} />{" "}
                      Opening Time:
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
                      <GoLocation style={{ color: "#af9a7d" }} /> Located:
                    </h3>
                    <h6>10 Manvers St Bath BA1 1JQ</h6>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md={12} lg={5}>
            <ReservationForm />
          </Col>
        </Row>
      </Container>
      <Container fluid className="home-shisha-section">
        <Row className="justify-content-center">
          <Col xs={6} className="home-shisha-section-col">
            <h1>{homePageContent.shishaSectionTitle}</h1>
            <div className="vertical-line-banner"></div>
            <p>{homePageContent.shishaSectionDescription}</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="home-prices-section">
        <Row className="justify-content-center">
          <Col xs={6} className="home-prices-section-col">
            <h1>{homePageContent.pricesSectionTitle}</h1>
            <div className="vertical-line-banner"></div>
            <p>{homePageContent.pricesSectionDescription}</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={3} lg={2} className="home-prices-section-col-drinks">
            <h3>Cocktails</h3>
            <h1>2 for £12</h1>
            <h6>1 for £7</h6>
          </Col>
          <Col xs={3} lg={2} className="home-prices-section-col-drinks">
            <h3>Shooters</h3>
            <h1>5 for £12</h1>
            <h6>1 for £3</h6>
          </Col>
          <Col xs={3} lg={2} className="home-prices-section-col-drinks">
            <h3>Hookah</h3>
            <h1>2 Flavours for £14</h1>
            <h6>More flavours at an extra cost</h6>
          </Col>
        </Row>
      </Container>
      <Container fluid className="home-menu-section">
        <Row className="justify-content-center">
          <Col xs={8} className="home-menu-section-col">
            <h1>Shisha Flavours And Cocktails</h1>
            <div className="vertical-line-banner"></div>
            <Row>
              <h3 style={{ "margin-left": "9vw" }}>
                <GiBottleVapors style={{ color: "#af9a7d" }} /> Shisha Flavours
              </h3>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} md={3}>
                <ul className="menu-list">
                  <li className="menu-list-item">Cali Lime</li>
                  <li className="menu-list-item">Froz Lemon</li>
                  <li className="menu-list-item">Froz Apple</li>
                  <li className="menu-list-item">Froz Raspberry</li>
                  <li className="menu-list-item">Mango</li>
                </ul>
              </Col>
              <Col xs={12} md={3}>
                <ul className="menu-list">
                  <li className="menu-list-item">Passion Fruit</li>
                  <li className="menu-list-item">Mint</li>
                  <li className="menu-list-item">Blue Mist</li>
                  <li className="menu-list-item">Strawberry</li>
                  <li className="menu-list-item">Bubblegum</li>
                </ul>
              </Col>
              <Col xs={12} md={3}>
                <ul className="menu-list">
                  <li className="menu-list-item">Watermelon</li>
                  <li className="menu-list-item">Grape</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <h3 style={{ "margin-left": "9vw", "margin-top": "" }}>
                <GiBottleVapors style={{ color: "#af9a7d" }} /> Shisha Flavours
              </h3>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} md={3}>
                <ul className="menu-list">
                  <li className="menu-list-item">Cali Lime</li>
                  <li className="menu-list-item">Froz Lemon</li>
                  <li className="menu-list-item">Froz Apple</li>
                  <li className="menu-list-item">Froz Raspberry</li>
                  <li className="menu-list-item">Mango</li>
                </ul>
              </Col>
              <Col xs={12} md={3}>
                <ul className="menu-list">
                  <li className="menu-list-item">Passion Fruit</li>
                  <li className="menu-list-item">Mint</li>
                  <li className="menu-list-item">Blue Mist</li>
                  <li className="menu-list-item">Strawberry</li>
                  <li className="menu-list-item">Bubblegum</li>
                </ul>
              </Col>
              <Col xs={12} md={3}>
                <ul className="menu-list">
                  <li className="menu-list-item">Watermelon</li>
                  <li className="menu-list-item">Grape</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
