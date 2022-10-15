import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import wgw_vid from '../../assets/Videos/WorkGoWhere_Demo.mp4';
import report_pdf from '../../assets/PDF/Final_Assessment_Final.pdf';
import wireframe from '../../assets/Images/WGW-Wireframe.png';
import wireframe_highfid from '../../assets/Images/WGW-HighFid.png';
import wireframe_mockup from '../../assets/Images/WGW-Mockup.png';
import Contact from '../../component/Contact';

export default function WorkGoWhere() {

    const [onHover, setOnHover] = useState(false);

    return (
    <>
        <Container id="intro" className="pb-2">
            <Row className="d-flex justify-content-center">
                <Row>
                    <h1 className="d-flex justify-content-end animate__animated animate__fadeInRight">
                        <u>WorkGoWhere</u>
                    </h1>
                </Row>

                <Row className="pt-3">
                    <Col xs={12} md={12} lg={6} xl={6} xxl={6} className="animate__animated animate__fadeInLeft">
                        <Row>
                            <span style={{width: "90%"}}>
                                The project aims to create a <b style={{color: "#00ADB5"}}>quicker and more efficient</b> process when it comes to finding
                                remote workspaces for working adults, bridging the gap of manually going through various online
                                articles and blogs to a few simple steps. 

                                <br/><br/> 

                                “WorkGoWhere” specifically narrow down remote work spaces 
                                that meet the needs of users, it can <b style={{color: "#00ADB5"}}>significantly improve the ease and efficiency</b> of finding such 
                                places at different places and times.
                            </span>
                        </Row>

                        <span className="d-flex justify-content-left pt-3" style={{fontSize: "0.8em", color: "#393E46"}}>
                            Skills: JavaScript, HTML, CSS, Tailwind CSS, MongoDB, ExpressJS, ReactJS, NodeJS <br/> <br/> 
                            Tools: Visual Studios Code, Figma, Jira, Discord, Github <br/> <br/> 
                            Framework & Library: MVC, MERN, Bootstrap, NPM  <br/> <br/> 
                        </span>

                        <span className="d-flex justify-content-end" style={{fontSize: "1.4em", color: "#393E46"}}>
                            <a href={report_pdf} target="_blank" rel="noreferrer" className="d-flex justify-content-end" style={{color: "#222831"}}>
                                <BsIcons.BsFillFileEarmarkPdfFill/> 
                            </a> 
                            &nbsp; &nbsp;
                            <a href="https://github.com/AgileProjectY2" target= "_blank" rel="noreferrer" className="d-flex justify-content-end" style={{color: "#222831"}}>
                                <BsIcons.BsGithub/> 
                            </a>
                        </span>
                    </Col>

                    <Col xs={12} md={12} lg={6} xl={6} xxl={6} className="animate__animated animate__fadeInRight pt-2">
                        <video width="100%" controls style={{borderRadius: "12px", border: "solid 2px grey"}}>
                            <source src={wgw_vid} type="video/mp4"/>
                            Your browser does not support HTML mp4 video.
                        </video>
                    </Col>

                    <a href="#process" className="d-flex justify-content-center pt-5">
                        <FiIcons.FiChevronsDown className="animate__animated animate__bounce" style= {{opacity: "0.5", fontSize: "20px", color: "#222831"}}/>
                    </a>
                </Row>
            </Row>
        </Container>

        <Container id="process" className="py-4">
            <Row>
                <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="d-flex justify-content-center animate__animated animate__fadeInDown">
                    <h2><u>Wireframes</u></h2>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={12} lg={4} xl={4} xxl={4} className="p-0">
                    <Row>
                        <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="d-flex justify-content-center animate__animated animate__fadeInDown py-3">
                            Low-Fidelity
                        </Col>
                    </Row>

                    <Row style={{minHeight: "23rem"}}>
                        <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="d-flex justify-content-center animate__animated animate__fadeInLeft">
                            <img 
                                src={wireframe}
                                style= {{borderRadius: "20px", width: "90%", border: "solid 2px grey"}}
                            />
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} md={12} lg={4} xl={4} xxl={4} className="p-0">
                    <Row>
                        <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="d-flex justify-content-center animate__animated animate__fadeInDown py-3">
                            High-Fidelity
                        </Col>
                    </Row>

                    <Row style={{minHeight: "23rem"}}>
                        <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="d-flex justify-content-center animate__animated animate__fadeInUp">
                            <img 
                                src={wireframe_highfid}
                                style= {{borderRadius: "20px", width: "90%", border: "solid 2px grey"}}
                            />
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} md={12} lg={4} xl={4} xxl={4}>
                    <Row>
                        <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="d-flex justify-content-center animate__animated animate__fadeInDown py-3">
                            Mock-Ups
                        </Col>
                    </Row>

                    <Row style={{minHeight: "23rem"}}>
                        <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="d-flex justify-content-center animate__animated animate__fadeInRight">
                            <img 
                                src={wireframe_mockup}
                                style= {{borderRadius: "20px", width: "90%", border: "solid 2px grey"}}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            
            <a href="#contact" className="d-flex justify-content-center pt-5">
                <FiIcons.FiChevronsDown className="animate__animated animate__bounce" style= {{opacity: "0.5", fontSize: "20px", color: "#222831"}}/>
            </a>
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