import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import * as FiIcons from 'react-icons/fi';
import * as BiIcons from 'react-icons/bi';
import ProjCards from '../../component/ProjCards';
import Contact from '../../component/Contact';
import ProjectDetails from './ProjectDetails';

export default function Projects(){

    let{
        projects
    } = ProjectDetails();

    const [onHover, setOnHover] = useState(false);

    return(
        <>
            <Container id="projects" className="d-flex justify-content-center pb-2">
                <Col xs={12} md={12} lg={10} xl={10} xxl={10}>
                    <Row className="d-flex justify-content-center">
                        <Row>
                            <h1 className="d-flex justify-content-end animate__animated animate__fadeInRight">
                                <u>Past Projects</u>
                            </h1>
                        </Row>

                        <Row className="pt-3">
                            <ProjCards data={projects}/>

                            <a href="#contact" className="d-flex justify-content-center py-2">
                                <FiIcons.FiChevronsDown className="animate__animated animate__bounce" style= {{opacity: "0.5", fontSize: "20px", color: "#222831"}}/>
                            </a>
                        </Row>
                    </Row>
                </Col>
            </Container>

            <Container id="contact" className="d-flex justify-content-center align-items-center pt-4" style={{minHeight: "32rem"}}>
                <Contact/>
            </Container>

            <Container className="py-4">
                <a href="#" className="d-flex justify-content-end">
                    <BiIcons.BiArrowToTop 
                        className={(onHover) ? "animate__animated animate__heartBeat" : "animate__animated animate__pulse"}
                        style={{fontSize: "1.6em", color: "white", backgroundColor: "#393E46", borderRadius: "15px"}}
                        onMouseOver={()=>(setOnHover(true))}
                        onMouseOut={()=>(setOnHover(false))}
                    />
                </a>
            </Container>
        </>
    );
}