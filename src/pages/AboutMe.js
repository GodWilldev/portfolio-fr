import { useEffect, useRef } from 'react';
import '../styles/aboutGrid.css';
import Typed from "typed.js";
import MyParticles from '../components/MyParticles.js';
import {SiGmail} from 'react-icons/si';
import Cursus from './Cursus';


function AboutMe({view}) { //About me
    // Create Ref element.
    const el = useRef(null);
    useEffect(() =>{
        const typed = new Typed(el.current, {
            strings: ["Ingénieur Logiciel", "Developpeur FullStack", "Developpeur Cloud et Devops", "Fast Learner", "Passionné d'IA"], // Strings to display
            startDelay: 300,
            typeSpeed: 80,
            backSpeed: 40,
            loop: true
        });
        // Destroying
        return () => {
            typed.destroy();
        };
    }, []); 
    return (  
    <>
    <div id="about" className='px-3' style={{height: 700+"px", backgroundColor: ""}}>
        <MyParticles view={view}/>
        <div className='py-1 px-1 h-100 d-flex flex-column justify-content-center container-fluid row' style={{zIndex: 2}}>
            <div className='col-12 col-lg-12' style={{zIndex: 2}} >
                <div className="text-black p-4 rounded-5" style={{zIndex: 3, backgroundColor: '', textShadow: '0 0 2px #fff'}}>
                    <div className="text-center">
                        <h1 className="h3 my-4">Bonjour, je suis <br/>  <span className="h1">Godwill M. BRUCE</span></h1>
                        <hr className="hr1"/>
                        <div className="m-5">
                            <p className="h1 mb-3" style={{color: '#fff', /*rgb(2, 57, 77)*/
                            textShadow: '0 0 10px #000, 0 0 20px #000, 0 0 20px rgb(2, 57, 77)'}}
                            > 
                                <span ref={el}></span>
                            </p>
                            <p className="fs-4"><i> j'aime coder et apprendre de nouvelles technologies</i></p>
                        </div>
                        <hr className="hr1"/>
                        <div className="p-0">
                            <p> <span><SiGmail color='white' size={30}/></span>   godwillmbdev@gmail@gmail.com </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='col-12 col-lg-6' style={{zIndex: 2}}>
                <div className='card bg-success text-white rounded-5'>
                    <div className='text-center d-flex justify-content-center p-3' style={{cursor: 'pointer'}}>
                        <img className='card-img-top img-fluid rounded-5' src="https://cdn.pixabay.com/photo/2016/04/25/07/49/man-1351346_960_720.png" alt="me"
                        style={{height: 500+'px', width: 'auto'}}/>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
    <Cursus />
    </>
);
}

export default AboutMe;
