import {Tab, Nav} from "react-bootstrap";
import SideBarPane from '../components/SideBarPane.js';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import Skills from './Skills';
import Certifs from "./Certifs.js";
import '../styles/cardStyle.css';


function Page({projects, skills, certifs}) {
  return (
    <div  className='mb-5'>
    
    <Tab.Container id="tabs" defaultActiveKey="/" >
      <div className="d-flex">
        <SideBarPane />
        <div className="w-100 mb-3 mt-2">
          <Tab.Content>
            <Tab.Pane eventKey="/">
              <AboutMe />
            </Tab.Pane>
            <Tab.Pane eventKey="/skills">
              <Skills skills={skills}/>
            </Tab.Pane>
            <Tab.Pane eventKey="/projects">
              <Projects projects={projects}/>
            </Tab.Pane>
            <Tab.Pane eventKey="/certificates">
              <Certifs certifs={certifs}/>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </div>
    </Tab.Container>
    </div>
  );
}

export default Page;