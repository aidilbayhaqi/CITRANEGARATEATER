import { Card, Row, Col, Carousel, Container } from "react-bootstrap";
import "react";
import citter from "../assets/img/citter.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const Struktural = () => {
  AOS.init()
  return (
    <>
    <div>
      <Card className="bg-dark text-white struktur-card">
        <Card.Img src={citter} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>STRUKTUR CITTER</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>

      <section>
        <Container
          className="struktur"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Row>
            <Col>
              <h1>STRUKTUR CITTER</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, nihil aspernatur numquam facilis iure quo adipisci
                aliquam vitae tempore autem.
              </p>
            </Col>
          </Row>
          <Row lg={1} md={1} sm={1} xs={1} className="ketua">
            <Col data-aos="fade-up" data-aos-duration="1100">
              <Card style={{ width: "22rem" }}>
                <Card.Img src={citter} />
                <Card.Body>
                  <h1>Card Title</h1>
                  <h2>Card Title</h2>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <button variant="primary">Go somewhere</button>
                </Card.Body>
              </Card>
            </Col>
            <Col data-aos="fade-up" data-aos-duration="1200">
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src={citter} />
                <Card.Body>
                  <h1>Card Title</h1>
                  <h2>Card Title</h2>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <button variant="primary">Go somewhere</button>
                </Card.Body>
              </Card>
            </Col>
            <Col data-aos="fade-up" data-aos-duration="1300">
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src={citter} />
                <Card.Body>
                  <h1>Card Title</h1>
                  <h2>Card Title</h2>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <button variant="primary">Go somewhere</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row
            lg={3}
            md={1}
            sm={1}
            className="anggota"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <Col>
              <Card>
                <Card.Img src={citter} />
                <Card.Body>
                  <h1>Card Title</h1>
                  <h2>Card Title</h2>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <button variant="primary">Go somewhere</button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={citter} />
                <Card.Body>
                  <h1>Card Title</h1>
                  <h2>Card Title</h2>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <button variant="primary">Go somewhere</button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={citter} />
                <Card.Body>
                  <h1>Card Title</h1>
                  <h2>Card Title</h2>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <button variant="primary">Go somewhere</button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={citter} />
                <Card.Body>
                  <h1>Card Title</h1>
                  <h2>Card Title</h2>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <button variant="primary">Go somewhere</button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={citter} />
                <Card.Body>
                  <h1>Card Title</h1>
                  <h2>Card Title</h2>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <button variant="primary">Go somewhere</button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={citter} />
                <Card.Body>
                  <h1>Card Title</h1>
                  <h2>Card Title</h2>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <button variant="primary">Go somewhere</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      </div>
    </>
  );
  
  
};
