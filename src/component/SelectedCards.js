import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Case1Img from "../assets/Images/WorkGoWhere/FrontPage.png";
import Case2Img from "../assets/Images/LittleSingapore/FrontPage.png";

export default function CScards() {
  const [work1Hovered, setWork1Hovered] = useState(true);
  const [work2Hovered, setWork2Hovered] = useState(false);

  const [work1Text, setWork1Text] = useState(true);
  const [work2Text, setWork2Text] = useState(true);

  const handleMouseOverWork1 = () => {
    setWork1Hovered(true);
    setWork2Text(false);
  };

  const handleMouseOutWork1 = () => {
    setWork2Text(true);
  };

  const handleMouseOverWork2 = () => {
    setWork1Hovered(false);
    setWork2Hovered(true);
    setWork1Text(false);
  };

  const handleMouseOutWork2 = () => {
    setWork1Hovered(true);
    setWork2Hovered(false);
    setWork1Text(true);
  };

  return (
    <>
      <Row className="pt-3">
        <Col className="d-flex justify-content-center">
          <Card style={{ border: "0px", width: "96%", minHeight: "21rem" }}>
            <Card.Body>
              <Row>
                <Col xs={12} md={12} lg={6} xl={6} xxl={6}>
                  <Row>
                    <Col
                      xs={12}
                      md={4}
                      lg={4}
                      xl={4}
                      xxl={4}
                      onMouseOver={handleMouseOverWork1}
                      onMouseOut={handleMouseOutWork1}
                    >
                      <h5
                        className={
                          work1Text
                            ? "d-flex justify-content-center animate__animated animate__fadeInDown"
                            : "d-none"
                        }
                      >
                        <b>
                          <u>Work Go Where</u>
                        </b>
                      </h5>
                    </Col>

                    <Col
                      xs={12}
                      md={4}
                      lg={4}
                      xl={4}
                      xxl={4}
                      onMouseOver={handleMouseOverWork2}
                      onMouseOut={handleMouseOutWork2}
                    >
                      <h5
                        className={
                          work2Text
                            ? "d-flex justify-content-center animate__animated animate__fadeInDown"
                            : "d-none"
                        }
                      >
                        <b>
                          <u>Little Singapore</u>
                        </b>
                      </h5>
                    </Col>
                  </Row>

                  {work1Hovered && (
                    <span
                      className="d-flex justify-content-center pt-3 animate__animated animate__fadeInUp"
                      style={{ fontSize: "0.9em" }}
                    >
                      WorkGoWhere aims to efficiently connect individuals to a
                      suitable space listed by owners for work or study.
                      <br />
                      <br />
                      Skills required: <br />
                      JavaScript, HTML, CSS, Tailwind CSS, MongoDB, ExpressJS,
                      ReactJS, NodeJS
                      <br />
                      <br />
                      Agile Methodology and Frameworks adpoted: <br />
                      Scrum, Kanban, MVC, MERN
                    </span>
                  )}

                  {work2Hovered && (
                    <span
                      className="d-flex justify-content-center pt-3 animate__animated animate__fadeInUp"
                      style={{ fontSize: "0.9em" }}
                    >
                      LittleSingapore was built to advertise a made-up theme
                      park. The project aims to attract new customers, sell
                      merchandise and efficiently provide information about the
                      park. <br />
                      <br />
                      Skills required: <br />
                      JavaScript, HTML, CSS
                      <br />
                      <br />
                      Agile Methodology and Frameworks adpoted: <br />
                      Scrum, Object-Oriented-Programming & Bootstrap
                    </span>
                  )}
                </Col>

                <Col
                  className="d-flex justify-content-center"
                  xs={12}
                  md={12}
                  lg={6}
                  xl={6}
                  xxl={6}
                >
                  {work1Hovered && (
                    <img
                      className="animate__animated animate__fadeInUp"
                      src={Case1Img}
                      alt="Case 1"
                      style={{
                        width: "90%",
                        border: "solid 2px grey",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                  {work2Hovered && (
                    <img
                      className="animate__animated animate__fadeInUp"
                      src={Case2Img}
                      alt="Case 2"
                      style={{
                        width: "100%",
                        border: "solid 2px grey",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
