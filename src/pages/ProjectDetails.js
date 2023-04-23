import ReactMarkdown from 'react-markdown';
import '../styles/markdown.css';
import '../styles/scrollBar.css';

function ProjectDetails({project}) {
    return (   
    <div className='py-3 px-4 text-white w-100 fs-5' style={{backgroundColor:'rgb(2, 57, 77)', maxHeight: 650+ "px",overflow: 'scroll'}}>
        <h1 className='h1 text-center'>{project.title}</h1>
        <div className='d-flex justify-content-between mb-2'>
            <a href={project.view_link} target="blank"><button className='btn btn-success'>View Project</button></a>
            <a href={project.code_link} target="blank"><button className='btn btn-success'>Source Code</button></a>
        </div>
        <div className='bg-dark'><img alt='prewiew' className='img-fluid rounded' style={{maxHeight: 500 +'px', width:'100%'}}
            src={project.thumbnail}/>
        </div>
        <div className='mt-5'>
            <h2 className='h2'>Description</h2>
            <p>{project.description}</p>
        </div>
        <div className='mt-4'>
            <h2 className='h2'>Tools</h2>
            <div className='d-flex justify-content-between mb-3'>
                {project.tools.map(tool => //map over the 'tool' attribute
                <b key={tool} className="badge fs-6 text-white border border-5 border-success rounded-pill">{tool}</b>
                )}
            </div>
        </div>
        <div className='mt-4'>
            <ReactMarkdown className='markdown-style'>
                {project.details}
            </ReactMarkdown>
        </div>
        <div className='d-flex flex-column align-items-center m-5'>
            <a href={project.view_link} target="blank" className='m-3'><button className='btn btn-lg btn-success'>View Project</button></a>
            <a href={project.code_link} target="blank" className='m-3'><button className='btn btn-lg btn-success'>Source Code</button></a>
        </div>
    </div>
    );
}

export default ProjectDetails;