import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ContactForm() {
  return (
    <Container fluid>
      <form className="reservation-form">
        <h2>Make a Reservation</h2>
        <Row className="justify-content-center reservation-form-row">
          <Col xs={5}>
            <Row>
              <label>Date</label>
            </Row>
            <Row>
              <input type="date" name="date" />
            </Row>
          </Col>
          <Col xs={5}>
            <Row>
              <label>Time</label>
            </Row>
            <Row>
              <input type="time" name="time" />
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center reservation-form-row">
          <Col xs={5}>
            <Row>
              <label>Name</label>
            </Row>
            <Row>
              <input type="text" name="name" />
            </Row>
          </Col>
          <Col xs={5}>
            <Row>
              <label>Phone</label>
            </Row>
            <Row>
              <input type="tel" name="phone" />
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center reservation-form-row">
          <Col xs={5}>
            <Row>
              <label>E-mail</label>
            </Row>
            <Row>
              <input type="email" name="email" />
            </Row>
          </Col>
          <Col xs={5}>
            <Row>
              <label>Number of guests</label>
            </Row>
            <Row>
              <input type="number" name="howmany" defaultValue="How many" />
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center reservation-form-row">
          <Col xs={10}>
            <Row>
              <label>Venue</label>
            </Row>
            <Row>
              <select>
                <option value="theearl">The Earl Cocktail Bar</option>
                <option value="theterrace">The Terrace Hookah Bar</option>
              </select>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center reservation-form-row">
          <Col xs={10}>
            <input type="checkbox" name="agree" />
            <label>
              I agree that my submitted data is being collected and stored.
            </label>
          </Col>
        </Row>
        <Row className="justify-content-center reservation-form-row">
          <Col xs={8}>
            <input type="submit" value="BOOK" className=" btn-primary-main" />
          </Col>
        </Row>
      </form>
    </Container>
  );
}
