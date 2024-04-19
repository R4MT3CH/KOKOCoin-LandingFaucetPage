import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import koko from '../assets/img/KOKO.svg'
import instagram from "../assets/img/insta.svg";
import twitter from "../assets/img/twit.svg";
import telegram from "../assets/img/telegram.svg";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = ({connectWallet,walletAddress}) => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={koko} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#faucet" className={activeLink === 'faucet' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('faucet')}>Faucet</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Road Map</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href="#"><img src={instagram} alt="Icon" /></a>
              <a href="#"><img src={twitter} alt="Icon" /></a>
              <a href="#"><img src={telegram} alt="Icon" /></a>
              </div>
              
                <button className="vvd" onClick={connectWallet} >
                  <span>
                    {walletAddress && walletAddress.length > 0
                    ? `Connected: ${walletAddress.substring(
                        0,
                        6
                      )}...${walletAddress.substring(38)}`
                    : "Connect Wallet"}
                    </span>
                  </button>
              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
