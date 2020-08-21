import React from "react";
import Carousel from "../components/carousel/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import { homePageContent } from "../repository/content";
import LineBreak from "../components/LineBreak";
import ReservationForm from "../components/ReservationForm";

export const Home = () => {
  return (
    <div>
      <Carousel />
      <Container fluid="md" className="home-header">
        <Row>
          <Col md={12} lg={6}>
            <Row>
              <h1>{homePageContent.mainHeaderTitle}</h1>
              <LineBreak />
            </Row>
            <Row>
              <p>{homePageContent.mainHeaderDescription}</p>
            </Row>
          </Col>
          <Col md={12} lg={6}>
            <ReservationForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
