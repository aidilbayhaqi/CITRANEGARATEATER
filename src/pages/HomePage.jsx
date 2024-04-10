import {
  Container,
  Row,
  Col,
  Carousel,
  Nav,
  Tab,
  Accordion,
} from "react-bootstrap";
import IconHome from "../assets/img/IconHome.png";
import IconHome2 from "../assets/img/IconHome2.png";
import test from "../assets/img/citter.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import colorSharp from "../assets/img/color-sharp.png";
import "react-bootstrap";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export const Home = () => {
  AOS.init()
  const [action, setAction] = useState(0);

  const handleSelect = (selectedIndex) => {
    setAction(selectedIndex);
  };

  return (
    <>
      {/* banner */}
      <div className="banner" id="/CITTERV2/">
        <Container>
          <Row className="align-item-center">
            <Col xs={12} md={6} xl={7}>
              <div>
                <span
                  className="tag"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  SELAMAT DATANG DI CITTER
                </span>
                <h1 data-aos="fade-up" data-aos-duration="2000">
                  CITRA NEGARA TEATER
                </h1>
                <p data-aos="fade-down">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Necessitatibus adipisci aut natus et vero error, magnam
                  doloribus assumenda veritatis exercitationem?
                </p>
                <button
                  onClick={() => (window.location.href = "https://instagram.com/CITTER_")}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Instagram Kami
                </button>
              </div>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img
                src={IconHome}
                alt=""
                data-aos="zoom-in"
                data-aos-duration="2000"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* about */}
      <section className="about" data-aos="zoom-out" data-aos-duration="1000">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <div className="about-box">
                <img src={IconHome2} alt="" className="mask-img" />
                <h2>Tentang Kami</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, praesentium.
                </p>
                <Row className="justify-content-center content">
                  <Col xs lg="12">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum obcaecati, ipsam impedit nesciunt asperiores ad
                      eum voluptate! Voluptatibus, quod odit! Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Non enim reiciendis
                      labore, vel ratione accusamus ipsam distinctio tempore
                      nobis rerum. Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Error beatae ex voluptatibus, ipsa, quia
                      veniam dolore maiores suscipit veritatis ab dolorem est in
                      sit atque temporibus, accusantium amet dicta eaque?
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <img src={colorSharp2} alt="" className="img-left" />
        </Container>
      </section>

      {/* prestasi */}
      <section
        className="prestasi"
        data-aos="zoom-out-left"
        data-aos-duration="1000"
      >
        <Container>
          <Row>
            <Col>
              <div>
                <h2>PRESTASI</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid doloremque sed et! Fugit, dolore molestias?
                </p>
              </div>
            </Col>
          </Row>
          <Carousel
            activeIndex={action}
            onSelect={handleSelect}
            data-aos="zoom-out-left"
            data-aos-duration="1500"
          >
            <Carousel.Item>
              <Col>
                <div className="action-box">
                  <img src={test} alt="" />
                  <div className="action-text">
                    <h4>PRESTASI 1</h4>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod, iusto.
                    </span>
                  </div>
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <div className="action-box">
                <img src={test} alt="" />
                <div className="action-text">
                  <h4>PRESTASI 2</h4>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, iusto.
                  </span>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="action-box">
                <img src={test} alt="" />
                <div className="action-text">
                  <h4>PRESTASI 3</h4>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, iusto.
                  </span>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
      <img src={colorSharp} alt="" className="img-right" />

      {/* kegiatan */}
      <section
        className="kegiatan"
        data-aos="zoom-out-right"
        data-aos-duration="1000"
      >
        <Container>
          <Row>
            <Col>
              <div>
                <h1>KEGIATAN</h1>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                  iusto.
                </span>
              </div>
            </Col>
          </Row>
          <Tab.Container defaultActiveKey="first">
            <Nav className="nav-slide" defaultActiveKey="first">
              <Nav.Item>
                <Nav.Link eventKey="first">Satu</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Dua</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tiga</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane
                eventKey="first"
                data-aos="zoom-out-right"
                data-aos-duration="1500"
              >
                <Row>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane
                eventKey="second"
                data-aos="zoom-out-right"
                data-aos-duration="1500"
              >
                <Row>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane
                eventKey="third"
                data-aos="zoom-out-right"
                data-aos-duration="1500"
              >
                <Row>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={12} md={4}>
                    <div className="project-box">
                      <img src={test} alt="" />
                      <div className="project-text">
                        <h4>KEGIATAN 1</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, iusto.
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>
      <img src={colorSharp2} alt="" className="img-left1" />
    

      {/* Fun Fact */}
      <section className="funfact" data-aos="zoom-in" data-aos-duration="1000">
        <Container>
          <Row>
            <Col>
              <div>
                <h1>Fun Fact CITTER</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  soluta ipsa aspernatur, laboriosam vel accusamus!
                </p>
              </div>
            </Col>
          </Row>
          <Row className="box-according" lg={2} xs={1} sm={1} md={1}>
            <Col>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h4>Accordion Item #1</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h4>Accordion Item #1</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <h4>Accordion Item #1</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <h4>Accordion Item #1</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <h4>Accordion Item #1</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    <h4>Accordion Item #1</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    <h4>Accordion Item #1</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    <h4>Accordion Item #1</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
