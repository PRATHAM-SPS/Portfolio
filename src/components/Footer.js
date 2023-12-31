import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo-2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/youtube-logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/pratham-ingawale-524288213/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.youtube.com/channel/UCIypIg9uzbIY2phLlqTNCdA" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="LinkedIn" /></a>
              
              <a href="https://github.com/PRATHAM-SPS" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" /></a>
              <a href="https://www.instagram.com/pratham_ingawale/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved<br></br><b>Pratham Ingawale</b></p>
           
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
