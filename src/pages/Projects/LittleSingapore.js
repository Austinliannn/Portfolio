import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
import LsVidDemo from "../../assets/Videos/LittleSingapore_Demo.mp4";
import Research from "../../assets/Images/LittleSingapore/Research.png";
import DesktopWF from "../../assets/Images/LittleSingapore/DesktopWF.png";
import MobileWF from "../../assets/Images/LittleSingapore/MobileWF.png";
import FrontPage from "../../assets/Images/LittleSingapore/FrontPage.png";
import AttractionsPage from "../../assets/Images/LittleSingapore/AttractionsPage.png";
import InformationPage from "../../assets/Images/LittleSingapore/InformationPage.png";
import BookNowPage from "../../assets/Images/LittleSingapore/BookNowPage.png";
import Contact from "../../component/Contact";
import ScrollTop from "../../component/ScrollTop";

export default function LittleSingapore() {
  return (
    <>
      <Container id="intro" className="pb-5">
        <Row className="d-flex justify-content-center">
          <Row>
            <h1 className="d-flex justify-content-end animate__animated animate__fadeInRight">
              <u>LittleSingapore</u>
            </h1>
          </Row>

          <Row className="pt-3">
            <Col
              xs={12}
              md={12}
              lg={6}
              xl={6}
              xxl={6}
              className="animate__animated animate__fadeInLeft py-4"
            >
              <Row>
                <span style={{ width: "90%" }}>
                  The project aims to{" "}
                  <b style={{ color: "#00ADB5" }}>attract new customers</b> by{" "}
                  <b style={{ color: "#00ADB5" }}>displaying information</b>{" "}
                  about thrilling rides and facilities for a newly built
                  theme-park. Apart from thrilling rides, customers are able to{" "}
                  <b style={{ color: "#00ADB5" }}>efficiently</b> plan their
                  itinerary around the park and transportation to the park.
                  Furthermore, tickets and merchandise are sold on the website
                  so that customers can{" "}
                  <b style={{ color: "#00ADB5" }}>purchase items with ease</b>.
                </span>
              </Row>

              <span
                className="d-flex justify-content-left pt-3"
                style={{ fontSize: "0.8em", color: "#393E46" }}
              >
                Skills: JavaScript, HTML, CSS <br /> <br />
                Tools: Visual Studios Code, Discord, Github <br /> <br />
                Framework & Library: Bootstrap
              </span>

              <span
                className="d-flex justify-content-end"
                style={{ fontSize: "1.4em", color: "#393E46" }}
              >
                <a
                  href="https://github.com/WebDevGroup101"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex justify-content-end"
                  style={{ color: "#222831" }}
                >
                  <BsIcons.BsGithub />
                </a>
              </span>
            </Col>

            <Col
              xs={12}
              md={12}
              lg={6}
              xl={6}
              xxl={6}
              className="animate__animated animate__fadeInRight py-4"
            >
              <video
                width="100%"
                controls
                style={{ borderRadius: "12px", border: "solid 2px grey" }}
              >
                <source src={LsVidDemo} type="video/mp4" />
                Your browser does not support HTML mp4 video.
              </video>
            </Col>

            <a href="#research" className="d-flex justify-content-center pt-5">
              <FiIcons.FiChevronsDown
                className="animate__animated animate__bounce"
                style={{ opacity: "0.5", fontSize: "20px", color: "#222831" }}
              />
            </a>
          </Row>
        </Row>
      </Container>

      <Container id="research" className="py-4">
        <Row>
          <h2 className="d-flex justify-content-center animate__animated animate__fadeInDown">
            <u>Research & Competitor analysis</u>
          </h2>
        </Row>

        <Row className="pt-4">
          <Col
            xs={12}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
            className="d-flex justify-content-center animate__animated animate__fadeInLeft pb-4"
          >
            <img
              src={Research}
              alt="Research"
              style={{
                borderRadius: "10px",
                width: "96%",
                border: "solid 2px grey",
              }}
            />
          </Col>

          <Col
            xs={11}
            md={11}
            lg={6}
            xl={6}
            xxl={6}
            className="animate__animated animate__fadeInRight"
          >
            <Row className="pb-3">
              <h5>
                <u>Competitors</u>
              </h5>{" "}
              <br />
              <span className="p-0">
                - Competitors research consist of mindmaps drawn to compare this
                project with other theme-parks.
              </span>
            </Row>

            <Row className="pb-3">
              <h5>
                <u>Consideration factors</u>
              </h5>{" "}
              <br />
              <span className="p-0">
                - Positive aspects of the website as well as the features
                implemented.
              </span>
              <span className="p-0">
                - Negative aspects of the website as well as features to be
                improved.
              </span>
            </Row>

            <Row className="pb-3">
              <h5>
                <u>Requirements</u>
              </h5>{" "}
              <br />
              <span className="p-0">
                - List requirements of the website such as services and
                information included.
              </span>
            </Row>

            <Row className="pb-3">
              <h5>
                <u>Designing</u>
              </h5>{" "}
              <br />
              <span className="p-0">
                - Project design consist of wireframes and mock-ups.{" "}
              </span>
            </Row>

            <Row>
              <h5>
                <u>Deliverables</u>
              </h5>{" "}
              <br />
              <span className="p-0">
                - Final version of the website with requirements achieved.
              </span>
            </Row>
          </Col>

          <a href="#wireframes" className="d-flex justify-content-center pt-3">
            <FiIcons.FiChevronsDown
              className="animate__animated animate__bounce"
              style={{ opacity: "0.5", fontSize: "20px", color: "#222831" }}
            />
          </a>
        </Row>
      </Container>

      <Container id="wireframes" className="py-4">
        <Row>
          <h2 className="d-flex justify-content-center animate__animated animate__fadeInDown">
            <u>Wireframes</u>
          </h2>
        </Row>

        <Row>
          <Col xs={12} md={12} lg={6} xl={6} xxl={6} className="p-0">
            <Row>
              <Col
                xs={12}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
                className="d-flex justify-content-center animate__animated animate__fadeInDown py-1"
              >
                <u>Desktop View</u>
              </Col>
            </Row>

            <Row style={{ minHeight: "23rem" }}>
              <Col
                xs={12}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
                className="d-flex justify-content-center animate__animated animate__fadeInLeft"
              >
                <img
                  src={DesktopWF}
                  alt="Desktop Wireframe"
                  style={{
                    borderRadius: "10px",
                    width: "80%",
                    border: "solid 2px grey",
                  }}
                />
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={12} lg={6} xl={6} xxl={6} className="p-0">
            <Row>
              <Col
                xs={12}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
                className="d-flex justify-content-center animate__animated animate__fadeInDown py-1"
              >
                <u>Mobile View</u>
              </Col>
            </Row>

            <Row style={{ minHeight: "23rem" }}>
              <Col
                xs={12}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
                className="d-flex justify-content-center animate__animated animate__fadeInLeft"
              >
                <img
                  src={MobileWF}
                  alt="Mobile Wireframe"
                  style={{
                    borderRadius: "10px",
                    width: "68%",
                    border: "solid 2px grey",
                  }}
                />
              </Col>
            </Row>
          </Col>

          <a
            href="#deliverables"
            className="d-flex justify-content-center pt-3"
          >
            <FiIcons.FiChevronsDown
              className="animate__animated animate__bounce"
              style={{ opacity: "0.5", fontSize: "20px", color: "#222831" }}
            />
          </a>
        </Row>
      </Container>

      <Container id="deliverables" className="py-3">
        <Row>
          <Row>
            <h3 className="d-flex justify-content-center animate__animated animate__fadeInDown">
              <u>Theme-park web application</u>
            </h3>
          </Row>

          <Row className="pt-2">
            <Col
              xs={12}
              md={12}
              lg={6}
              xl={6}
              xxl={6}
              className="d-flex justify-content-center animate__animated animate__fadeInRight py-2"
            >
              <img
                src={FrontPage}
                alt="Home Page"
                style={{
                  borderRadius: "10px",
                  width: "82%",
                  border: "solid 2px grey",
                }}
              />
            </Col>

            <Col
              xs={12}
              md={12}
              lg={6}
              xl={6}
              xxl={6}
              className="d-flex justify-content-center animate__animated animate__fadeInRight py-2"
            >
              <img
                src={AttractionsPage}
                alt="Attractions Page"
                style={{
                  borderRadius: "10px",
                  width: "82%",
                  border: "solid 2px grey",
                }}
              />
            </Col>
          </Row>

          <Row className="pt-2">
            <Col
              xs={12}
              md={12}
              lg={6}
              xl={6}
              xxl={6}
              className="d-flex justify-content-center animate__animated animate__fadeInRight py-2"
            >
              <img
                src={InformationPage}
                alt="Information Page"
                style={{
                  borderRadius: "10px",
                  width: "82%",
                  border: "solid 2px grey",
                }}
              />
            </Col>

            <Col
              xs={12}
              md={12}
              lg={6}
              xl={6}
              xxl={6}
              className="d-flex justify-content-center animate__animated animate__fadeInRight py-2"
            >
              <img
                src={BookNowPage}
                alt="Book Now Page"
                style={{
                  borderRadius: "10px",
                  width: "82%",
                  border: "solid 2px grey",
                }}
              />
            </Col>
          </Row>
        </Row>

        <a href="#contact" className="d-flex justify-content-center pt-1">
          <FiIcons.FiChevronsDown
            className="animate__animated animate__bounce"
            style={{ opacity: "0.5", fontSize: "20px", color: "#222831" }}
          />
        </a>
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
