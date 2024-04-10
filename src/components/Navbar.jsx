import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from '../assets/img/logo.png'

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
            <Nav className="me-auto">
              <Nav.Link href="/CITTERV2/">Home</Nav.Link>
              <Nav.Link href="/galeri">Galeri</Nav.Link>
              <Nav.Link href="/karya">Karya</Nav.Link>
              <Nav.Link href="/struktural">Struktural</Nav.Link>
            </Nav>
            <span className="navbar-text">
              {/* <div className="social-icon">
                <a href="">
                  <img src={}></img>
                </a>
                <a href="">
                  <img src={}></img>
                </a>
                <a href="">
                  <img src={}></img>
                </a>
              </div> */}
              <button
                className="tombol"
                onClick={() => (window.location.href = "Register")}
              >
                Ayo Bergabung
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
