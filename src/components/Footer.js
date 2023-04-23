import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import {BsGithub} from 'react-icons/bs';
import $ from 'jquery';
import ContactForm from "./ContactForm";
import '../styles/footer.css';


var icons_size = 40;

function copyEmail(){
    navigator.clipboard.writeText("godwillmbdev@gmail.com");
    //alert("Email copied");
    $('#copy-success').fadeIn();
    setTimeout(() => {
        $('#copy-success').fadeOut(1000)
    }, 1000);
}

function goToTab(tab){
    document.getElementById(tab).childNodes[0].click();
    window.scrollTo(0, 0);
}

function Footer(){
    return(
    <footer id="footer" className="footer container-fluid pt-5 px-4 bg-dark text-white">
        <div className="row">
            <div className="col-4 offset-1 mb-3" id='footer-sections'>
                <h5>Sections</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><span onClick={() => {goToTab("side-about");}} className="nav-link p-0 text-muted">A propos</span></li>
                    <li className="nav-item mb-2"><span onClick={() => {goToTab("side-skills");}} className="nav-link p-0 text-muted">Compétences</span></li>
                    <li className="nav-item mb-2"><span onClick={() => {goToTab("side-projects");}} className="nav-link p-0 text-muted">Projets</span></li>
                    <li className="nav-item mb-2"><span onClick={() => {goToTab("side-certificates");}} className="nav-link p-0 text-muted">Certifications</span></li>
                </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
                <ContactForm />
            </div>
        </div>
        <div className="">
            <h5 className='text-center'>Contacts</h5>
            <ul className="list-unstyled d-flex justify-content-center" id="social-buttons">
                {/*<li className="rounded-circle  p-2 ms-3"><a className="link-light" href="#"><FaLinkedin size={icons_size} color="green" /></a></li>*/}
                <li className="ms-3"><a className="btn btn-success rounded-circle p-2" href="https://www.linkedin.com/in/madjri-godwill-bruce/" target="blank"><FaLinkedin size={icons_size}/></a></li>
                <li className="ms-3"><button className="btn btn-success rounded-circle p-2" data-bs-toggle="collapse" data-bs-target="#email"><SiGmail size={icons_size}/></button></li>
                <li className="ms-3"><a className="btn btn-success rounded-circle p-2" href="https://github.com/GodWilldev" target="blank"><BsGithub size={icons_size}/></a></li>
            </ul>
            <div className='collapse text-center' id='email'>
                <p >godwillmbdev@gmail.com   
                    <span><button type='button' className="btn btn-light btn-sm" onClick={copyEmail}>Copier</button></span>
                    <span id="copy-success" className="text-info" style={{display: 'none'}}>  Copié!</span>
                </p>
            </div>
        </div>

        <div className="d-flex justify-content-center py-2 my-1 border-top">
            <p>Copyright &copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
    </footer>
    )
}

export default Footer;
