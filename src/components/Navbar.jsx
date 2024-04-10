import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from '../assets/img/logo.png'
import {NavLink}from 'react-router-dom'

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggle-icon"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navlink">
              <NavLink to="/CITTERV2/">Home</NavLink>
              <NavLink to="/CITTERV2/Galeri">Galeri</NavLink>
              <NavLink to="/CITTERV2/karya">Karya</NavLink>
              <NavLink to="/CITTERV2/Struktural">Struktural</NavLink>
            </Nav>
            
              <NavLink to="/CITTERV2/Register" className="tombol">Ayo Bergabung</NavLink>


          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
