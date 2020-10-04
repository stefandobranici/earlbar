import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./ReservationForm.css";

export default function ReservationForm() {
  return (
    <Form class="bookingForm">
      <h2>Make a Reservation</h2>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTime">
          <Form.Label>Time</Form.Label>
          <Form.Control type="time" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCapacity">
          <Form.Label>Guests</Form.Label>
          <Form.Control type="number" min="1" max="30" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Select Venue</Form.Label>
          <Form.Control as="select">
            <option value="theearl">The Earl Cocktail Bar</option>
            <option value="theterrace">The Terrace Hookah Bar</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Group as={Col} contorlId="formGridCheckbox">
        <Form.Check
          type="checkbox"
          label="I agree that my submitted data is being collected and stored."
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Book
      </Button>
    </Form>
  );
}
