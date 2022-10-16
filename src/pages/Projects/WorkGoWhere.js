import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import WgwVidDemo from '../../assets/Videos/WorkGoWhere_Demo.mp4';
import ReportPDF from '../../assets/PDF/Final_Assessment_Final.pdf';
import LowFid from '../../assets/Images/WorkGoWhere/LowFid.png';
import HighFid from '../../assets/Images/WorkGoWhere/HighFid.png';
import Mockup from '../../assets/Images/WorkGoWhere/Mockup.png';
import WorkflowChart from '../../assets/Images/WorkGoWhere/Ganttchart.png';
import FrontPage from '../../assets/Images/WorkGoWhere/FrontPage.png'; 
import ResultsPage from '../../assets/Images/WorkGoWhere/ResultsPage.png';
import ResultDetails from '../../assets/Images/WorkGoWhere/ResultDetails.png';
import OwnerPage from '../../assets/Images/WorkGoWhere/OwnerPage.png';
import Dashboard from '../../assets/Images/WorkGoWhere/Dashboard.png';
import ListingForm from '../../assets/Images/WorkGoWhere/ListingForm.png';
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
                            Framework & Library: MVC, MERN, Bootstrap, NPM
                        </span>

                        <span className="d-flex justify-content-end" style={{fontSize: "1.4em", color: "#393E46"}}>
                            <a href={ReportPDF} target="_blank" rel="noreferrer" className="d-flex justify-content-end" style={{color: "#222831"}}>
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
                            <source src={WgwVidDemo} type="video/mp4"/>
                            Your browser does not support HTML mp4 video.
                        </video>
                    </Col>

                    <a href="#workflow" className="d-flex justify-content-center pt-5">
                        <FiIcons.FiChevronsDown className="animate__animated animate__bounce" style= {{opacity: "0.5", fontSize: "20px", color: "#222831"}}/>
                    </a>
                </Row>
            </Row>
        </Container>

        <Container id="workflow" className="py-4">
            <Row>
                <h2 className="d-flex justify-content-center animate__animated animate__fadeInDown">
                    <u>Workflow</u>
                </h2>
            </Row>

            <Row className="pt-4">
                <Col xs={12} md={12} lg={6} xl={6} xxl={6} className="d-flex justify-content-center animate__animated animate__fadeInLeft pb-4">
                    <img 
                        src={WorkflowChart}
                        style= {{borderRadius: "10px", width: "96%", border: "solid 2px grey"}}
                    />
                </Col>
                
                <Col xs={11} md={11} lg={6} xl={6} xxl={6} className="animate__animated animate__fadeInRight">
                    <Row className="pb-1">
                        <h5><u>Planning</u></h5> <br/>
                        <span className="p-0">- This phase consist of project ideation and <b style={{color: "#00ADB5"}}>mapping of aims/objectives</b>. </span>
                    </Row>

                    <Row className="pb-1">
                        <h5><u>Research & Requirements Gathering</u></h5> <br/>
                        <span className="p-0">- This phase consist of project research process, <b style={{color: "#00ADB5"}}>analysis</b> and <b style={{color: "#00ADB5"}}>specifications</b>. </span>
                    </Row>

                    <Row className="pb-1">
                        <h5><u>Designing</u></h5> <br/>
                        <span className="p-0">- This phase consist of project design such as <b style={{color: "#00ADB5"}}>low-high fidelity</b> and <b style={{color: "#00ADB5"}}>mock-ups</b>. </span>
                    </Row>

                    <Row className="pb-1">
                        <h5><u>Sprint 1</u></h5> <br/>
                        <span className="p-0">- This phase consist of project <b style={{color: "#00ADB5"}}>front-end development</b> with <b style={{color: "#00ADB5"}}>ReactJS</b>. </span>
                    </Row>

                    <Row className="pb-1">
                        <h5><u>Sprint 2</u></h5> <br/>
                        <span className="p-0">- This phase consist of project <b style={{color: "#00ADB5"}}>back-end development</b> with <b style={{color: "#00ADB5"}}>MERN stack</b>. </span>
                    </Row>

                    <Row className="pb-1">
                        <h5><u>Sprint 3</u></h5> <br/>
                        <span className="p-0">- This phase consist of <b style={{color: "#00ADB5"}}>code refactoring</b> and <b style={{color: "#00ADB5"}}>implementation of authentication</b>. </span>
                    </Row>

                    <Row>
                        <h5><u>Sprint 4</u></h5> <br/>
                        <span className="p-0">- This phase consist of project <b style={{color: "#00ADB5"}}>report</b> and <b style={{color: "#00ADB5"}}>review</b>. </span>
                    </Row>
                </Col>                

                <a href="#wireframes" className="d-flex justify-content-center pt-5">
                    <FiIcons.FiChevronsDown className="animate__animated animate__bounce" style= {{opacity: "0.5", fontSize: "20px", color: "#222831"}}/>
                </a>
            </Row>
        </Container>

        <Container id="wireframes" className="py-5">
            <Row>
                <h2 className="d-flex justify-content-center animate__animated animate__fadeInDown">
                    <u>Wireframes</u>
                </h2>
            </Row>

            <Row>
                <Col xs={12} md={12} lg={4} xl={4} xxl={4} className="p-0">
                    <Row>
                        <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="d-flex justify-content-center animate__animated animate__fadeInDown py-3">
                            <u>Low-Fidelity</u>
                        </Col>
                    </Row>

                    <Row style={{minHeight: "23rem"}}>
                        <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="d-flex justify-content-center animate__animated animate__fadeInLeft">
                            <img 
                                src={LowFid}
                                style= {{borderRadius: "10px", width: "90%", border: "solid 2px grey"}}
                            />
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} md={12} lg={4} xl={4} xxl={4} className="p-0">
                    <Row>
                        <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="d-flex justify-content-center animate__animated animate__fadeInDown py-3">
                            <u>High-Fidelity</u>
                        </Col>
                    </Row>

                    <Row style={{minHeight: "23rem"}}>
                        <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="d-flex justify-content-center animate__animated animate__fadeInUp">
                            <img 
                                src={HighFid}
                                style= {{borderRadius: "10px", width: "90%", border: "solid 2px grey"}}
                            />
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} md={12} lg={4} xl={4} xxl={4}>
                    <Row>
                        <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="d-flex justify-content-center animate__animated animate__fadeInDown py-3">
                            <u>Mock-Ups</u>
                        </Col>
                    </Row>

                    <Row style={{minHeight: "23rem"}}>
                        <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="d-flex justify-content-center animate__animated animate__fadeInRight">
                            <img 
                                src={Mockup}
                                style= {{borderRadius: "10px", width: "90%", border: "solid 2px grey"}}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            
            <a href="#deliverables" className="d-flex justify-content-center pt-4">
                <FiIcons.FiChevronsDown className="animate__animated animate__bounce" style= {{opacity: "0.5", fontSize: "20px", color: "#222831"}}/>
            </a>
        </Container>

        <Container id="deliverables" className="py-4">
            <Row>
                <Row>
                    <h3 className="d-flex justify-content-center animate__animated animate__fadeInDown"><u>Customers finding a space & Owners listing a space</u></h3> 
                </Row>

                <Row className="pt-2">
                    <Col xs={12} md={12} lg={4} xl={4} xxl={4} className="d-flex justify-content-center animate__animated animate__fadeInRight py-2">
                        <img 
                            src={FrontPage}
                            style= {{borderRadius: "10px", width: "95%", border: "solid 2px grey"}}
                        />
                    </Col>

                    <Col xs={12} md={12} lg={4} xl={4} xxl={4} className="d-flex justify-content-center animate__animated animate__fadeInRight py-2">
                        <img 
                            src={ResultsPage}
                            style= {{borderRadius: "10px", width: "95%", border: "solid 2px grey"}}
                        />
                    </Col>

                    <Col xs={12} md={12} lg={4} xl={4} xxl={4} className="d-flex justify-content-center animate__animated animate__fadeInRight py-2">
                        <img 
                            src={ResultDetails}
                            style= {{borderRadius: "10px", width: "95%", border: "solid 2px grey"}}
                        />
                    </Col>
                </Row>

                <Row >
                    <Col xs={12} md={12} lg={4} xl={4} xxl={4} className="d-flex justify-content-center animate__animated animate__fadeInRight py-2">
                        <img 
                            src={OwnerPage}
                            style= {{borderRadius: "10px", width: "95%", height: "90%", border: "solid 2px grey"}}
                        />
                    </Col>

                    <Col xs={12} md={12} lg={4} xl={4} xxl={4} className="d-flex justify-content-center animate__animated animate__fadeInRight py-2">
                        <img 
                            src={Dashboard}
                            style= {{borderRadius: "10px", width: "95%", height: "90%", border: "solid 2px grey"}}
                        />
                    </Col>

                    <Col xs={12} md={12} lg={4} xl={4} xxl={4} className="d-flex justify-content-center animate__animated animate__fadeInRight py-2">
                        <img 
                            src={ListingForm}
                            style= {{borderRadius: "10px", width: "95%", height: "90%", border: "solid 2px grey"}}
                        />
                    </Col>
                </Row>
            </Row>


            <a href="#contact" className="d-flex justify-content-center pt-1">
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