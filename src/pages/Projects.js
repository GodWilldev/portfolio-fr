import CardProject from '../components/CardProject.js';
import ProjectDetails from './ProjectDetails.js';
import '../styles/modal.css';

function Projects({projects}) { //list of card elements element
    return (
        <div className='container-fluid row mt-3'>
            {/*map over all the projects*/}
            { projects.map((project, ind) => (
                <div key={ind} className='col-12 col-md-6 col-xl-4 px-1 px-sm-5 px-md-1 px-lg-3 px-xl-1 px-xxl-3 mb-4'>
                    <CardProject project={project}/>
                    <div className="modal" id={"project-details"+project._id}>
                        <div className="modal-dialog modal-xl" >
                            <div className="modal-content">
                                {/*<div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>*/}
                                <div className="modal-body">
                                    <div className="text-end"><button type="button" className="btn-close" data-bs-dismiss="modal"></button></div>
                                    <ProjectDetails project={project} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;