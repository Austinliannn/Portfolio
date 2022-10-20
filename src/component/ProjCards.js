import React from "react";
import { Col, Card } from "react-bootstrap";
import * as BsIcons from "react-icons/bs";

export default function Projcards(props) {
  return (
    <>
      {props.data.map((entry, index) => (
        <Col key={index} xs={12} md={12} lg={4} xl={4} xxl={4} className="py-3">
          <Card
            className="animate__animated animate__fadeInLeft"
            style={{ minHeight: "23rem" }}
          >
            <Card.Img
              variant="top"
              src={entry.img}
              style={{
                height: "10rem",
                borderBottomRightRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
            />

            <Card.Body className="pt-0 py-0 ">
              <Card.Title
                className="d-flex justify-content-left pt-3"
                style={{ fontSize: "1.2em" }}
              >
                <u>{entry.title}</u>
              </Card.Title>

              <Card.Text
                className="d-flex justify-content-left align-items-center p-0"
                style={{ fontSize: "0.8em" }}
              >
                {entry.description}
              </Card.Text>

              <Card.Text style={{ fontSize: "0.8em", minHeight: "3.6rem" }}>
                Skills: <br />
                {entry.skills.map((skill, index) =>
                  index + 1 != entry.skills.length ? skill + ", " : skill
                )}
              </Card.Text>

              <Card.Text
                className="d-flex justify-content-left align-items-center p-0"
                style={{ fontSize: "1.2em" }}
              >
                <a
                  href={entry.read}
                  target="_blank"
                  className="d-flex justify-content-end"
                  style={{ color: "#222831" }}
                >
                  <BsIcons.BsArrowRightCircleFill />
                </a>
                &nbsp; &nbsp;
                <a
                  href={entry.github}
                  target="_blank"
                  className="d-flex justify-content-end"
                  style={{ color: "#222831" }}
                >
                  <BsIcons.BsGithub />
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}
