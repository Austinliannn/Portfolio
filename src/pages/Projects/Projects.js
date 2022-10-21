import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import * as FiIcons from "react-icons/fi";
import ProjCards from "../../component/ProjCards";
import Contact from "../../component/Contact";
import ProjectDetails from "./ProjectDetails";
import ScrollTop from "../../component/ScrollTop";

export default function Projects() {
  let { projects } = ProjectDetails();

  return (
    <>
      <Container id="projects" className="d-flex justify-content-center pb-2">
        <Col xs={12} md={12} lg={11} xl={11} xxl={11}>
          <Row className="d-flex justify-content-center">
            <Row>
              <h1 className="d-flex justify-content-end animate__animated animate__fadeInRight">
                <u>Past Projects</u>
              </h1>
            </Row>

            <Row className="pt-3">
              <ProjCards data={projects} />

              <a href="#contact" className="d-flex justify-content-center py-2">
                <FiIcons.FiChevronsDown
                  className="animate__animated animate__bounce"
                  style={{ opacity: "0.5", fontSize: "20px", color: "#222831" }}
                />
              </a>
            </Row>
          </Row>
        </Col>
      </Container>

      <Container
        id="contact"
        className="d-flex justify-content-center align-items-center pt-4"
        style={{ minHeight: "32rem" }}
      >
        <Contact />
      </Container>

      <Container className="py-4">
        <ScrollTop />
      </Container>
    </>
  );
}
