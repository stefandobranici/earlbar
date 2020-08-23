import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiBottleVapors } from "react-icons/gi";

export default function ShishaMenu() {
  return (
    <Container fluid className="shisha-section">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="shisha-section-col">
          <h1>
            {" "}
            <GiBottleVapors style={{ color: "#af9a7d" }} /> Premium Shisha
            Flavour
          </h1>
          <div className="vertical-line-banner"></div>
          <Row className="justify-content-center">
            <Col xs={6} md={4}>
              <ul className="shisha-list">
                <li className="shisha-list-item">Cali Lime</li>
                <li className="shisha-list-item">Froz Lemon</li>
                <li className="shisha-list-item">Froz Apple</li>
                <li className="shisha-list-item">Froz Raspberry</li>
                <li className="shisha-list-item">Mango</li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <ul className="shisha-list">
                <li className="shisha-list-item">Passion Fruit</li>
                <li className="shisha-list-item">Mint</li>
                <li className="shisha-list-item">Blue Mist</li>
                <li className="shisha-list-item">Strawberry</li>
                <li className="shisha-list-item">Bubblegum</li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <ul className="shisha-list">
                <li className="shisha-list-item">Watermelon</li>
                <li className="shisha-list-item">Grape</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
