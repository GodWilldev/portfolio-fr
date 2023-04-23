import { Tooltip } from 'bootstrap';
import {useEffect } from 'react';

function CardSkill(props) { //a card element
    let skill = props.skill;
    useEffect(() => { // to activate bootstrap tooltips
        var tooltipTriggerList = [].slice.call(
          document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new Tooltip(tooltipTriggerEl);
        });
      }, []);
    return (
        <>
    {/*<div className='col-6 col-md-4 col-xl-3 px-1 px-sm-3 px-md-1 px-lg-3 px-xl-1 px-xxl-2' 
    style={{margin: 'auto'}} >*/}
    <div className=''>
        <div className='card bg-dark text-white border border-2 border-warrning rounded card-skill'  
        data-bs-toggle="tooltip" data-bs-title={skill.description} data-bs-placement="right"
        /*data-bs-toggle="modal" data-bs-target={"#skill-description" + skill._id} style={{cursor: ''}}*/
        >
            <div className='text-center d-flex justify-content-center p-3' style={{cursor: 'pointer'}}>
                <img className='card-img-top img-fluid' src={skill.logo} alt="skill's thumbnail" id='img'
                style={{height: 150+'px', maxWidth: 150+'px'}}/>
            </div>
            <div className='card-header text-center h5 mb-4'>{skill.name}</div>
        </div>        
    </div>
    </>
    );
}

export default CardSkill;
/*<div className="modal" id={"skill-description"+ skill._id}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <h2 className="h4">{skill.name}</h2>
                        <p>{skill.description}</p>
                    </div>
                </div>
            </div>
        </div>*/