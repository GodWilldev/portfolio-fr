//const Script = require("../utilityScripts/script");

function CardProject({project}) { //a card element
    return (
        <div className='card p-3 mb-5 bg-dark text-white h-100 rounded card-project' style={{cursor: 'pointer'}}
        /*data-bs-toggle="modal" data-bs-target={"#project-details"+project._id} title="see details"*/>
            <div><img className='card-img-top img-fluid' src={project.thumbnail} alt="project's thumbnail"
            style={{height : 30+'vh', maxHeight: 100+'%', maxWidth: 100+'%', objectFit: 'cover'}} />
            </div>
            <div className='card-header text-center h2'>{project.title}</div>
            { project.alt && <div className='card-header text-start'>{project.alt}</div>}
            <div className='card-body d-flex flex-column justify-content-between'>
                <div>
                    <div className='d-flex mb-3'>
                        {project.tools.map(tool => //map over the 'tool' attribute
                            <b key={tool} className="badge text-success border border-5 border-success rounded-pill me-3">{tool}</b>
                        )}
                    </div>
                    <div className=" border-top border-5 card-title d-flex justify-content-between"></div>
                    {/*<p className="card-text">{Script.limit_char(project.description)}</p>*/}
                </div>
                <div>
                    <div className="d-flex justify-content-between">
                        {/*<button className="btn btn-light" data-bs-toggle="modal" data-bs-target={"#project-details"+project._id}>Code Source &raquo;</button>*/}
                        { project.code_link && <a href={project.code_link} target='blank'><button className="btn btn-light" title='see code source'>Code Source &raquo;</button></a> }
                        {project.view_link && <a href={project.view_link} target='blank'><button className="btn btn-success" title='see project in live'>Demo &raquo;</button></a>}
                    </div>
                </div>
            </div>
        </div>
    );
}



export default CardProject;