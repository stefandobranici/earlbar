import React from "react";
import { Row, Col } from "react-bootstrap";

export default function DrinkItem({ item }) {
  return (
    <div>
      <Row>
        <Col xs="auto">
          <h3>{item.name}</h3>
        </Col>
        <Col xs="auto">
          <h3>{item.price + "£"}</h3>
        </Col>
      </Row>
      <Row>
        <Col xs="auto">
          <h6>
            {item.ingredients.map((el, i) =>
              i < item.ingredients.length - 1 ? el + ", " : el
            )}
          </h6>
        </Col>
      </Row>
    </div>
  );
}
