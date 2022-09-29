import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../styles/Navigationbar.css';
import { IconContext } from 'react-icons';

function Navigationbar(){

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar d-flex justify-content-end">
                    <span style={{color: "black"}}>Menu</span>
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars style={{color: "black"}} onClick={showSidebar} />
                    </Link>
                </div>

           <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
             <ul className="nav-menu-items" onClick={showSidebar}>
               <li className="navbar-toggle">
                <Link to="#" className="menu-bars d-flex justify-content-end">
                   <AiIcons.AiOutlineClose style={{color: "black"}}/>
                 </Link>
               </li>
               
               {SidebarData.map((item, index) => {
                 return (
                   <li key={index} className={item.sbName}>
                     <Link to={item.path}>
                       <span>{item.icon} &nbsp; {item.title}</span>
                     </Link>
                   </li>
                 );
               })}
             </ul>
           </nav>
         </IconContext.Provider>
        </>
    );
}

export default Navigationbar;