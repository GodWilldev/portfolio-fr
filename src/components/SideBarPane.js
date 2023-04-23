import { Nav } from "react-bootstrap";
import {FaUser} from 'react-icons/fa';
import {IoGrid} from 'react-icons/io5';
import {GiDiploma} from 'react-icons/gi';
import {GiLaptop} from 'react-icons/gi';
import '../styles/sideBar.css';

var icons_size = 40;

function SideBarPane(){
  
    return(
    <div className="d-flex flex-column flex-shrink-0 bg-dark border-top" id="sideBar" >
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center" style={{zIndex: 2}}>
            <hr />
            <Nav variant="" className="nav-pills d-flex flex-column mb-auto mt-5">
              <Nav.Item className="sideBar-item" id="side-about">
                <Nav.Link eventKey="/" className="text-white sideBar-link" data-bs-toggle="" data-bs-title="About" data-bs-placement="left">
                    <span className='me-2' aria-label="About"><FaUser size={icons_size}/></span>
                    <span className='sideBar-item-text'>A propos</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="sideBar-item" id="side-skills">
                <Nav.Link eventKey="/skills" className="text-white sideBar-link" data-bs-title="Skills" data-bs-toggle="" data-bs-placement="right">
                    <span className='me-2' aria-label="Skills"><GiLaptop size={icons_size} /></span>
                    <span className='sideBar-item-text'>Compétences</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="sideBar-item" id="side-projects">
                <Nav.Link eventKey="/projects" className="text-white sideBar-link" data-bs-title="Projects" data-bs-toggle="" data-bs-placement="right">
                    <span className='me-2' aria-label="Projects"><IoGrid size={icons_size} /></span>
                    <span className='sideBar-item-text'>Projets</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="sideBar-item" id="side-certificates">
                <Nav.Link eventKey="/certificates" className="text-white sideBar-link" data-bs-title="Certifications" data-bs-toggle="" data-bs-placement="right">
                    <span className='me-2' aria-label="Certifications"><GiDiploma size={icons_size}/></span>
                    <span className='sideBar-item-text'>Certifications</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </ul>
    </div>
    )
}

export default SideBarPane;