import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import koko from '../assets/img/KOKO.svg'
import logo from "../assets/img/logo.svg";
import instagram from "../assets/img/insta.svg";
import twitter from "../assets/img/twit.svg";
import telegram from "../assets/img/telegram.svg";
import { Instagram } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={koko} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.instagram.com/koko.coin_/"><img src={instagram} alt="Icon" /></a>
            <a href="https://twitter.com/koko_coin_"><img src={twitter} alt="Icon" /></a>
            <a href="https://t.me/+5tdf3GT7X-wwZGIz"><img src={telegram} alt="Icon" /></a>
            </div>
            <p>KOKO Coin is simply paying homage to a meme we all love and recognize.KOKO Coin is a meme coin with 
              no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin 
              is completely useless and for entertainment purposes only.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
