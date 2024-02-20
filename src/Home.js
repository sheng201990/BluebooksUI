import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProfileInfo } from "./ProfileInfo";
import { ProfileContent } from "./ProfileContent";
import { Specialities } from "./Specialities";
import { Experience } from "./Experience";
import style from "./profile.module.css";

export const Home = () => {
  return (
    <div
      style={{
        display: "block",
        height: "100vh",
        objectFit: "cover",
        objectPosition: "top",
        backgroundColor: "white",
      }}
    >
      <Navbar expand="lg" style={{ backgroundColor: "white", display: "flex" }}>
        <Container fluid style={{ justifyContent: "space-between" }}>
          <Navbar.Brand href="/">
            <div
              style={{
                fontFamily: "normal",
                color: "blue",
                fontSize: "15px",
              }}
            >
              rainbow.ept@gmail.com
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ backgroundColor: "white" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              style={{
                fontSize: "14px",
                fontStyle: "normal",
                margin: "auto",
                textAlign: "right",
              }}
            >
              <Nav.Link href="/">
                <div className={style.text}>Home</div>
              </Nav.Link>
              <Nav.Link href="/">
                <div className={style.text}>Portfolio</div>
              </Nav.Link>
              <Nav.Link href="/hobby">
                <div className={style.text}>Hobby</div>
              </Nav.Link>
              <Nav.Link href="/contact">
                <div className={style.text}>Contact</div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row style={{ backgroundColor: "#CDF8FE" }}>
        <Col md={6}>
          <ProfileInfo />
        </Col>
        <Col md={6}>
          <ProfileContent />
        </Col>
      </Row>
      <Row style={{ marginTop: "100px" }}>
        <div
          style={{
            fontSize: "40px",
            fontFamily: "normal",
            fontWeight: "bolder",
            textAlign: "center",
          }}
        >
          Technical Skills
        </div>
        <Col md={12}>
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <img
              src="/react.jpg"
              width="40"
              height="40"
              style={{ margin: "30px", cursor: "pointer" }}
            ></img>
            <img
              src="/javascript.jpg"
              width="40"
              height="40"
              style={{ margin: "30px", cursor: "pointer" }}
            ></img>
            <img
              src="/typescript.jpg"
              width="40"
              height="40"
              style={{ margin: "30px", cursor: "pointer" }}
            ></img>
            <img
              src="/bootstrap.jpg"
              width="40"
              height="40"
              style={{ margin: "30px", cursor: "pointer" }}
            ></img>
            <img
              src="/css_icon.jpg"
              width="40"
              height="40"
              style={{ margin: "30px", cursor: "pointer" }}
            ></img>
            <img
              src="/html_icon.jpg"
              width="40"
              height="40"
              style={{ margin: "30px", cursor: "pointer" }}
            ></img>
            <img
              src="/sourcetree.jpg"
              width="40"
              height="40"
              style={{ margin: "30px", cursor: "pointer" }}
            ></img>
            <img
              src="/visual_studio.jpg"
              width="40"
              height="40"
              style={{ margin: "30px", cursor: "pointer" }}
            ></img>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "100px" }}>
        <div
          style={{
            fontSize: "40px",
            fontFamily: "normal",
            fontWeight: "bolder",
            textAlign: "center",
          }}
        >
          What I achieved in my works
        </div>
        <Col md={12}>
          <div style={{ marginTop: "30px" }}>
            <Experience />
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "100px" }}>
        <div
          style={{
            fontSize: "40px",
            fontFamily: "normal",
            fontWeight: "bolder",
            textAlign: "center",
          }}
        >
          Specialities
        </div>
        <Col md={12}>
          <Specialities />
        </Col>
      </Row>
    </div>
  );
};
