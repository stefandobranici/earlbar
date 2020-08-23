import React from "react";
import { Col } from "react-bootstrap";

export default function ImageItem({ backgroundUrl, size, colSize }) {
  return (
    <Col xs={12} md={colSize}>
      <div
        className={size}
        style={{
          background: `url(${backgroundUrl}) center/cover no-repeat`,
        }}
      />
    </Col>
  );
}
