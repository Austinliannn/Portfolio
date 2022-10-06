import React from 'react';
import { Row, Col, Form, Button} from 'react-bootstrap';
import * as BsIcons from 'react-icons/bs';
import * as SiIcons from 'react-icons/si';

export default function Contact() {
  return (
    <>
        <Row>
            <Col 
                xs={12} md={12} lg={12} xl={12} xxl={12} 
                className=" pt-5 animate__animated animate__fadeInDown"
            >
                <h1 className="d-flex justify-content-center pt-4">Lets work together</h1>
                
                <div  style={{textAlign: "center"}}>
                    <span>
                        Drop me an <b style={{color: "#00ADB5"}}>email</b> or contact me through <b style={{color: "#00ADB5"}}>social media</b> below.
                        Usually respond in <b style={{color: "#00ADB5"}}>1-3 days time</b>.
                    </span><br/>
                    <span>
                         Thank you for your patience
                    </span>
                </div>

                <span className="d-flex justify-content-center pt-2" style={{fontSize: "1.6em"}}>
                    <a href={`mailto:${"austinliannn@gmail.com"}?subject=${"Freelance web application" || ""}`} style={{color: "#222831"}}>
                        <SiIcons.SiGmail/> 
                    </a>
                    &nbsp; &nbsp; &nbsp; 
                    <a href="https://www.instagram.com/austinliannn/" target="_blank" style={{color: "#222831"}}>
                        <BsIcons.BsInstagram/> 
                    </a>
                    &nbsp; &nbsp; &nbsp; 
                    <a href="https://www.linkedin.com/in/austin-lian-394337215/" target="_blank" style={{color: "#222831"}}>
                        <BsIcons.BsLinkedin/>
                    </a>
                        &nbsp; &nbsp; &nbsp; 
                    <a href="https://github.com/Austinliannn" target="_blank" style={{color: "#222831"}}>
                        <BsIcons.BsGithub/>
                    </a>
                </span>
            </Col>
        </Row>
    </>
  );
}