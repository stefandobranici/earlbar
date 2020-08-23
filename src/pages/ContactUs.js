import React from "react";
import ReservationForm from "../components/ReservationForm";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Banner from "../components/Banner";

export const ContactUs = () => {
  return (
    <Container fluid className="contact-us-container">
      <Row>
        <Banner
          title="Contact Us"
          subtitle="Reach out to us or make a booking for a night out"
        />
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} lg={6}>
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
        <Col xs={12} md={10} lg={6}>
          <ReservationForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
