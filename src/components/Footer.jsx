import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import insta from "../assets/img/instagram.svg";
import email from "../assets/img/envelope.svg";
import whatsapp from "../assets/img/whatsapp.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row lg={2} sm={1}>
          <Col>
            <h4>CITTER</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quod
              soluta delectus voluptates officia aspernatur!
            </p>
            <p>copyright by aidilbyhaqi</p>
          </Col>
          <Col>
            <a href="">
              <img src={whatsapp} alt="" />
              0895-0432-2572
            </a>
            <br />
            <a href="">
              <img src={insta} alt="" />
              @CITTER_
            </a>
            <br />
            <a href="">
              <img src={email} alt="" /> citranegarateater@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
