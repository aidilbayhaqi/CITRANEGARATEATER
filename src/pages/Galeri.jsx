import "react-bootstrap";
import "react";
import { Container, Row, Col, Card, Carousel, Nav, Tab } from "react-bootstrap";
import citter from "../assets/img/citter.png";
import citter1 from '../assets/img/Galeri/action.png'
import citter2 from '../assets/img/Galeri/galeri 3.png'
import citter3 from '../assets/img/Galeri/galeri 4.png'
import citter4 from '../assets/img/Galeri/galeri 5.jpeg'
import citter5 from '../assets/img/Galeri/galeri 6.jpeg'
import citter6 from '../assets/img/Galeri/galeri 7.jpeg'
import citter7 from '../assets/img/Galeri/galeri 8.jpeg'
import citter8 from '../assets/img/Galeri/galeri 9.jpeg'
import citter9 from '../assets/img/Galeri/galeri10.jpeg'
import citter10 from '../assets/img/Galeri/galeri11.jpeg'
import citter11 from '../assets/img/Galeri/galeri12.jpeg'
import citter12 from '../assets/img/Galeri/galeri13.jpeg'
import citter13 from '../assets/img/Galeri/galeri 14.jpeg'
import citter14 from '../assets/img/Galeri/galeri15.jpeg'
import citter15 from '../assets/img/Galeri/galeri 16.jpeg'
import citter16 from '../assets/img/Galeri/galeri 2.png'
import AOS from "aos";
import "aos/dist/aos.css";

export const Galeri = () => {
  AOS.init()
  return (
    <>
    <div id="/galeri">
      <Carousel className="galeri" fade>
        <Carousel.Item>
          <img src={citter} alt="" />
          <Carousel.Caption>
            <h1>First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={citter3} alt="" />
          <Carousel.Caption>
            <h1>Second slide label</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={citter1} alt="" />
          <Carousel.Caption>
            <h1>Third slide label</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="pagesGaleri" data-aos="fade-up" data-aos-duration='1000'>
        <Container>
          <Row>
            <Col>
              <h1>GALERI CITTER</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                molestias doloremque voluptas totam ab tempora!
              </p>
            </Col>
          </Row>
          <Row
            lg={3}
            md={2}
            sm={2}
            xs={1}
            className="cardGaleri justify-content-center"
          >
            <Col>
              <div
                className="galeri-body"
                data-aos="fade-down-right"
                data-aos-duration="1100"
              >
                <img src={citter2} />
                <div className="galeri-text">
                  <h3>Card Title</h3>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="galeri-body"
                data-aos="fade-down-right"
                data-aos-duration="1200"
              >
                <img src={citter4} />
                <div className="galeri-text">
                  <h3>Card Title</h3>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="galeri-body"
                data-aos="fade-down-right"
                data-aos-duration="1300"
              >
                <img src={citter12} />
                <div className="galeri-text">
                  <h3>Card Title</h3>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="galeri-body"
                data-aos="fade-down-right"
                data-aos-duration="1400"
              >
                <img src={citter10} />
                <div className="galeri-text">
                  <h3>Card Title</h3>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="galeri-body"
                data-aos="fade-down-right"
                data-aos-duration="1500"
              >
                <img src={citter5} />
                <div className="galeri-text">
                  <h3>Card Title</h3>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="galeri-body"
                data-aos="fade-down-right"
                data-aos-duration="1600"
              >
                <img src={citter6} />
                <div className="galeri-text">
                  <h3>Card Title</h3>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="galeri-body"
                data-aos="fade-down-right"
                data-aos-duration="1700"
              >
                <img src={citter7} />
                <div className="galeri-text">
                  <h3>Card Title</h3>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="galeri-body"
                data-aos="fade-down-right"
                data-aos-duration="1800"
              >
                <img src={citter8} />
                <div className="galeri-text">
                  <h3>Card Title</h3>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="galeri-body"
                data-aos="fade-down-right"
                data-aos-duration="1900"
              >
                <img src={citter16} />
                <div className="galeri-text">
                  <h3>Card Title</h3>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="galeri-body"
                data-aos="fade-down-right"
                data-aos-duration="2000"
              >
                <img src={citter13} />
                <div className="galeri-text">
                  <h3>Card Title</h3>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="galeri-body"
                data-aos="fade-down-right"
                data-aos-duration="2100"
              >
                <img src={citter14} />
                <div className="galeri-text">
                  <h3>Card Title</h3>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="galeri-body"
                data-aos="fade-down-right"
                data-aos-duration="2200"
              >
                <img src={citter15} />
                <div className="galeri-text">
                  <h3>Card Title</h3>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="aktivitas"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <Row>
          <Col>
            <h1>AKTIVITAS DIVISI</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              ducimus distinctio quibusdam, dolorum aperiam nostrum?
            </p>
          </Col>
        </Row>
        <Tab.Container defaultActiveKey="first">
          <Nav
            defaultActiveKey="first"
            className="nav-kegiatan"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Nav.Item>
              <Nav.Link eventKey="first">Adegan</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Artistik</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Make Up</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Kostum</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Danus</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane
              eventKey="first"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <Row lg={3} md={3} sm={2} xs={1}>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1100"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1200"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1300"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1400"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane
              eventKey="second"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <Row lg={3} md={3} sm={2} xs={1}>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1100"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1200"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1300"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1400"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane
              eventKey="third"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <Row lg={3} md={3} sm={2} xs={1}>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1100"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1200"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1300"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1400"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane
              eventKey="fourth"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <Row lg={3} md={3} sm={2} xs={1}>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1100"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1200"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1300"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1400"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane
              eventKey="fifth"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <Row lg={3} md={3} sm={2} xs={1}>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1100"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1200"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1300"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1400"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="project-box"
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                  >
                    <img src={citter} alt="" />
                    <div className="project-text">
                      <h4>KEGIATAN 1</h4>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, iusto.
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </section>
      </div>
    </>
  );
};
