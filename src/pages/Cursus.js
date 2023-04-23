import CardCursus from '../components/CardCursus'

import {education} from "../datas/education.js";
import {experience} from "../datas/experience.js";

import '../styles/cursus.css'

function Cursus() {
    return (
        <div className="row px-3">
            <div className="education ">
                <h3 className="title text-white">Parcours Académique</h3>
                <CardCursus cursusItems={education}/>
            </div>
            <div className="experience ">
                <h3 className="title text-white">Experiences Professionnelles</h3>
                <CardCursus cursusItems={experience} />
            </div>
        </div>
    )
}

export default Cursus