import { Tooltip } from 'bootstrap';
import {useEffect } from 'react';
import { certifLogo } from '../datas/certifLogo';



function CardCertif({certif}) { //a card element
    function redirectCertif(){
        //window.location.href = certif.view_link;
        window.open(certif.view_link, '_blank');
    }
    useEffect(() => { // to activate bootstrap tooltips
        var tooltipTriggerList = [].slice.call(
          document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new Tooltip(tooltipTriggerEl);
        });
      }, []);
    return (
    
        <div className='card p-3 mb-5 text-white h-100 bg-dark border border-2 rounded card-certif' onClick={redirectCertif}
        /*data-bs-toggle="modal" data-bs-target={"#certif-description" + certif._id}*/ 
        title='see certificate' style={{cursor: 'pointer', textDecoration: 'none', /*backgroundColor:'rgb(2, 57, 77)'*/}}>
            <div className='card-body p-0'>
                <div className="card-title text-center h5">{certif.title}</div>
                {/*<p className="card-text">{Script.limit_char(certif.description)}</p>
                <button type="button" className="btn btn-success">See certif &raquo;</button>
                <Link href={"/certifs/details/".concat(certif._id)} className="btn btn-success">See certif &raquo;</Link>*/}
            </div>
            <div className='card-img-top'>
                <img className='img-fluid' src={certif.thumbnail} alt="certif's thumbnail"/>
            </div>
            <div className='bg-success p-1 rounded-circle' data-bs-toggle="tooltip" data-bs-title={certif.company} data-bs-placement="right"
            style={{marginTop: -9+'%', marginLeft: 1+'%', display: 'inline-block', width:60+'px', height:60+'px'}}>
                <img className='img-fluid h-100 w-100 ' alt="certif's company" 
                src={certifLogo[certif.company]} />
            </div>
            <div className='card-header text-center'>
                {certif.type.map(ty => //map over the 'tool' attribute
                    <b key={ty} className="badge text-white border border-5 border-success rounded-pill me-3">{ty}</b>
                )}
            </div>
        </div>
    );
}

export default CardCertif;

/*
<div className="modal" id={"certif-description"+ certif._id}>
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <h2 className="h3 text-center">{certif.title}</h2>
                        <p>{certif.description}</p>
                        <ReactMarkdown className=''>
                            {certif.details}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
        */