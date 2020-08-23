import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export default function ReservationForm() {
  return (
    <Container fluid>
      <form className="reservation-form">
        <h2>Make a Reservation</h2>
        <Row className="justify-content-center reservation-form-row">
          <Col xs={5}>
            <Row>
              <label for="date">Date</label>
            </Row>
            <Row>
              <input type="date" name="date" />
            </Row>
          </Col>
          <Col xs={5}>
            <Row>
              <label for="time">Time</label>
            </Row>
            <Row>
              <input type="time" name="time" />
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center reservation-form-row">
          <Col xs={5}>
            <Row>
              <label for="name">Name</label>
            </Row>
            <Row>
              <input type="text" name="name" />
            </Row>
          </Col>
          <Col xs={5}>
            <Row>
              <label for="phone">Phone</label>
            </Row>
            <Row>
              <input type="tel" name="phone" />
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center reservation-form-row">
          <Col xs={5}>
            <Row>
              <label for="email">E-mail</label>
            </Row>
            <Row>
              <input type="email" name="email" />
            </Row>
          </Col>
          <Col xs={5}>
            <Row>
              <label for="howmany">Number of guests</label>
            </Row>
            <Row>
              <input type="number" name="howmany" defaultValue="How many" />
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center reservation-form-row">
          <Col xs={10}>
            <Row>
              <labe for="venue">Venue</labe>
            </Row>
            <Row>
              <select name="venue">
                <option value="theearl">The Earl Cocktail Bar</option>
                <option value="theterrace">The Terrace Hookah Bar</option>
              </select>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center reservation-form-row">
          <Col xs={10}>
            <input type="checkbox" name="agree" />
            <label for="agree">
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
