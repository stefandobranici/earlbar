import React from "react";
import "./Card.css";
import { Row, Col, Card } from "react-bootstrap";

export default function CardItem({ item }) {
  return (
    <Col xs={"6"} md={4} lg={3}>
      <Card className="card-item">
        <Card.Img variant="top" src={item.imgSrc} />
        <Row>
          <Col xs="12">
            <h3>
              {item.name}
              {/* {item.price + "£"} */}
            </h3>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p>
              {item.ingredients.map((el, i) =>
                i < item.ingredients.length - 1 ? el + ", " : el
              )}
            </p>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
