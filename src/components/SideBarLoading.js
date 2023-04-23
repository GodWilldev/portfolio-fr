import {Nav } from "react-bootstrap";
import {FaUser} from 'react-icons/fa';
import {IoGrid} from 'react-icons/io5';
import {GiDiploma} from 'react-icons/gi';
import {GiLaptop} from 'react-icons/gi';
import '../styles/sideBar.css';
import Loader from "./Loader";

var icons_size = 40;

function SideBarLoading(){
  
    return(
    <div className="d-flex flex-column flex-shrink-0 bg-dark border-top" id="sideBar" >
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <hr />
            <Nav variant="" className="nav-pills d-flex flex-column mb-auto mt-5">
              <Nav.Item className="sideBar-item" id="side-about">
                <Nav.Link eventKey="/" className="text-white sideBar-link" data-bs-toggle="" data-bs-title="About" data-bs-placement="left">
                    <span className='me-2' aria-label="About"><FaUser size={icons_size}/></span>
                    <span className='sideBar-item-text'>About Me</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="sideBar-item" id="side-skills">
                <Nav.Link eventKey="/skills" disabled className="opacity-25 text-white sideBar-link" data-bs-title="Skills" data-bs-toggle="" data-bs-placement="right">
                    <span className='me-2' aria-label="Skills"><GiLaptop size={icons_size} /></span>
                    <span className='sideBar-item-text'>Skills</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="sideBar-item" id="side-projects">
                <Nav.Link eventKey="/projects" disabled className="opacity-25 text-white sideBar-link" data-bs-title="Projects" data-bs-toggle="" data-bs-placement="right">
                    <span className='me-2' aria-label="Projects"><IoGrid size={icons_size} /></span>
                    <span className='sideBar-item-text'>Projects</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="sideBar-item" id="side-certificates">
                <Nav.Link eventKey="/certificates" disabled className="opacity-25 text-white sideBar-link" data-bs-title="Certifications" data-bs-toggle="" data-bs-placement="right">
                    <span className='me-2' aria-label="Certifications"><GiDiploma size={icons_size}/></span>
                    <span className='sideBar-item-text'>Certificates</span>
                </Nav.Link>
              </Nav.Item>
              <div className='mt-4'>
                <Loader text={false} />
              </div>
            </Nav>
          </ul>
    </div>
    )
}

export default SideBarLoading;