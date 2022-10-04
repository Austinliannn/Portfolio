import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../styles/Navigationbar.css';
import { IconContext } from 'react-icons';
import { Col } from 'react-bootstrap';
import 'animate.css';

function Navigationbar(){

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <IconContext.Provider value={{ color: "white" }}>
          <div className="navbar">
              <Col className="d-flex justify-content-left">
                  <span style={{color: "black"}}>Logo</span>
              </Col>

              <Col className="d-flex justify-content-end">
                  <Link to="#" className="menu-bars">
                      <FaIcons.FaBars style={{color: "black"}} onClick={showSidebar} />
                  </Link>
              </Col>
          </div>
          
          <nav 
            className={(sidebar) ? "nav-menu active" : "nav-menu"}
          >
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars d-flex justify-content-end" style={{paddingRight: "10px"}}>
                  <AiIcons.AiOutlineClose style={{color: "white"}}/>
                </Link>
              </li>
              
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.sbName}>
                    <Link style={{color: "white"}} to={item.path}>
                      <span>{item.icon} &nbsp; {item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
    );
}

export default Navigationbar;