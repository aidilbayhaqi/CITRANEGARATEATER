import {Card, Row, Col, Carousel, Container} from 'react-bootstrap'
import 'react'
import citter from '../assets/img/citter.png'
import AOS from "aos";
import "aos/dist/aos.css";

export const Karya = () => {
  AOS.init()
  return (
    <>
    <div id='/karya'>
      <section>
        <Carousel className="karya-slide" fade>
          <Carousel.Item>
            <img src={citter} alt="" />
            <Carousel.Caption>
              <h3>KEPENDEL</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
                eos. Voluptate laborum doloribus eaque. Recusandae cupiditate
                obcaecati perspiciatis dignissimos repellendus.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={citter} alt="" />
            <Carousel.Caption>
              <h3>PEMATUNG</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
                eos. Voluptate laborum doloribus eaque. Recusandae cupiditate
                obcaecati perspiciatis dignissimos repellendus.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={citter} alt="" />
            <Carousel.Caption>
              <h3>COMING SOON</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
                eos. Voluptate laborum doloribus eaque. Recusandae cupiditate
                obcaecati perspiciatis dignissimos repellendus.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section
        className="karya-kami"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Container>
          <Row>
            <Col>
              <h1>KARYA KAMI</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                rem eaque laudantium exercitationem, saepe delectus provident!
                Ut quam quas exercitationem?
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card
                border="dark"
                className="karya-card"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <Carousel className="karya-slide" fade>
                  <Carousel.Item>
                    <img src={citter} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={citter} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={citter} alt="" />
                  </Carousel.Item>
                </Carousel>
                <Card.Header>
                  <h1>KEPENDEL</h1>
                </Card.Header>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempore accusantium possimus quis eius aliquam, labore
                    dignissimos ad nemo, similique deserunt maxime asperiores
                    veritatis aspernatur voluptatem deleniti quae unde voluptate
                    eos veniam. Unde ad, voluptate dignissimos sapiente itaque,
                    voluptatem eveniet sequi voluptatibus, atque sed provident
                    porro suscipit! Odit voluptate consequuntur vitae iste eius
                    facere at perspiciatis aspernatur aliquid delectus, aperiam
                    quam voluptatem illo blanditiis beatae labore fugit tempora
                    quae quas ab ad accusamus inventore sapiente iure. Iste
                    accusamus vitae fuga voluptas repellat sequi obcaecati
                    molestiae nihil, maiores laudantium facere qui hic
                    praesentium voluptates, officia enim adipisci neque
                    necessitatibus quia quam! Natus repellat cumque laborum
                    velit ipsum aliquid. Nam quibusdam fugit unde alias
                    voluptatum ad? Repellat sint soluta ipsam quibusdam quidem
                    sequi, delectus ex veniam voluptatum eaque. Odit nisi,
                    tempore nobis aliquam ipsa possimus cum quaerat eligendi
                    corporis laborum magni numquam nam. Harum ut odio asperiores
                    ex debitis. Eos aliquam optio ducimus.
                  </p>
                </Card.Text>
                <button>Download Naskah</button>
                <button>Lihat kami di Youtube </button>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card
                border="dark"
                className="karya-card"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <Carousel className="karya-slide" fade>
                  <Carousel.Item>
                    <img src={citter} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={citter} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={citter} alt="" />
                  </Carousel.Item>
                </Carousel>
                <Card.Header>
                  <h1>KEPENDEL</h1>
                </Card.Header>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempore accusantium possimus quis eius aliquam, labore
                    dignissimos ad nemo, similique deserunt maxime asperiores
                    veritatis aspernatur voluptatem deleniti quae unde voluptate
                    eos veniam. Unde ad, voluptate dignissimos sapiente itaque,
                    voluptatem eveniet sequi voluptatibus, atque sed provident
                    porro suscipit! Odit voluptate consequuntur vitae iste eius
                    facere at perspiciatis aspernatur aliquid delectus, aperiam
                    quam voluptatem illo blanditiis beatae labore fugit tempora
                    quae quas ab ad accusamus inventore sapiente iure. Iste
                    accusamus vitae fuga voluptas repellat sequi obcaecati
                    molestiae nihil, maiores laudantium facere qui hic
                    praesentium voluptates, officia enim adipisci neque
                    necessitatibus quia quam! Natus repellat cumque laborum
                    velit ipsum aliquid. Nam quibusdam fugit unde alias
                    voluptatum ad? Repellat sint soluta ipsam quibusdam quidem
                    sequi, delectus ex veniam voluptatum eaque. Odit nisi,
                    tempore nobis aliquam ipsa possimus cum quaerat eligendi
                    corporis laborum magni numquam nam. Harum ut odio asperiores
                    ex debitis. Eos aliquam optio ducimus.
                  </p>
                </Card.Text>
                <button>Download Naskah</button>
                <button>Lihat kami di Youtube </button>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card
                border="dark"
                className="karya-card"
                data-aos="fade-right"
                data-aos-duration="1700"
              >
                <Carousel className="karya-slide" fade>
                  <Carousel.Item>
                    <img src={citter} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={citter} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={citter} alt="" />
                  </Carousel.Item>
                </Carousel>
                <Card.Header>
                  <h1>KEPENDEL</h1>
                </Card.Header>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempore accusantium possimus quis eius aliquam, labore
                    dignissimos ad nemo, similique deserunt maxime asperiores
                    veritatis aspernatur voluptatem deleniti quae unde voluptate
                    eos veniam. Unde ad, voluptate dignissimos sapiente itaque,
                    voluptatem eveniet sequi voluptatibus, atque sed provident
                    porro suscipit! Odit voluptate consequuntur vitae iste eius
                    facere at perspiciatis aspernatur aliquid delectus, aperiam
                    quam voluptatem illo blanditiis beatae labore fugit tempora
                    quae quas ab ad accusamus inventore sapiente iure. Iste
                    accusamus vitae fuga voluptas repellat sequi obcaecati
                    molestiae nihil, maiores laudantium facere qui hic
                    praesentium voluptates, officia enim adipisci neque
                    necessitatibus quia quam! Natus repellat cumque laborum
                    velit ipsum aliquid. Nam quibusdam fugit unde alias
                    voluptatum ad? Repellat sint soluta ipsam quibusdam quidem
                    sequi, delectus ex veniam voluptatum eaque. Odit nisi,
                    tempore nobis aliquam ipsa possimus cum quaerat eligendi
                    corporis laborum magni numquam nam. Harum ut odio asperiores
                    ex debitis. Eos aliquam optio ducimus.
                  </p>
                </Card.Text>
                <button>Download Naskah</button>
                <button>Lihat kami di Youtube </button>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      </div>
    </>
  );
}

