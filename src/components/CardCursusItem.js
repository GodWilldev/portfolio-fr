import React from "react";

export const CardCursusItem = ({cursusItem}) => {
    return (
        <div className="timeline-item">
            <div className="circle-dot"></div>
            <h3 className="timeline-date">
                <i className="fa fa-calendar"></i> {cursusItem.date}
            </h3>
            <h4 className="timeline-title">{cursusItem.title}</h4>
            <p className="timeline-text">
                {cursusItem.description}
            </p>
            { cursusItem.tools && <div className=''>
                <u className="me-4">Outils Utilisés: </u>
                {cursusItem.tools.map((tool, i) => //map over the 'tool' attribute
                    <b key={i} className="badge text-white border border-5 border-success rounded-pill me-3">{tool}</b>
                )}
            </div>}
        </div>
    );
};
