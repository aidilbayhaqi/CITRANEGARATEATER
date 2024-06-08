import React from "react";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useState } from "react";

export const Register = () => {
  const scriptURL = `https://script.google.com/macros/s/AKfycbwGvtcQaNcXc8bgIArn75ReYmUEqciW_lEfuJUQly9b3Fk9Htd65g6I4Nz4AaWaRZwO/exec`;
  const form = document.forms["CITTER (Citra Negara Teater)"];

  const [formData, setFormData] = useState({
    email: "",
    nama: "",
    kelas: "",
    no_whatsapp: "",
    sosial_media: "",
    alasan: "",
  });

  const [show, setShow] = useState(true);
  const alert = document.querySelector(".alert-regist");
  const kirim = document.querySelector(".tombol-register");
  const loading = document.querySelector(".tombol-register-loading");

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    kirim.classList.toggle("d-none");
    loading.classList.toggle("d-none");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        kirim.classList.toggle("d-none");
        loading.classList.toggle("d-none");
        alert.classList.toggle("d-none");
        form.reset();
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div id="/CITRANEGARATEATER/Register/"> 
    <section className="register">
      <Container className="form-register">
        <Row>
          <Col>
            <h1>FORM CITTER</h1>
            <p>lengkapi form dibawah ini</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form
              className="box-input"
              name="CITTER (Citra Negara Teater)"
              onSubmit={handleSubmit}
            >
              <Alert
                onClose={() => setShow(false)}
                dismissible
                className="d-none alert-regist"
              >
                This is a alert with ''
                <Alert.Link href="#">an example link"</Alert.Link>. Give it a
                click if you like.
              </Alert>
              <Form.Group className="input-box">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="EMAIL"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="input-box">
                <Form.Label>NAMA LENGKAP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="NAMA LENGKAP"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="input-box">
                <Form.Label>KELAS DAN JURUSAN</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="KELAS DAN JURUSAN"
                  name="kelas"
                  value={formData.kelas}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="input-box">
                <Form.Label>NO WHATSAPP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="NO WHATSAPP"
                  name="no_whatsapp"
                  value={formData.no_whatsapp}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="input-box">
                <Form.Label>SOSIAL MEDIA</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="SOSIAL MEDIA"
                  name="sosial_media"
                  value={formData.sosial_media}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="input-box">
                <Form.Label>ALASAN MASUK CITTER</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="alasan"
                  value={formData.alasan}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </Form.Group>
              <button className="tombol-register" type="submit">
                SUBMIT
              </button>
              <button className="tombol-register-loading d-none" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
};
