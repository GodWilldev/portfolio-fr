import SkillsGrid from '../components/SkillsGrid.js';



function Skills({skills}) { //list of card elements element
    return (
        <div className='container'>
            <SkillsGrid skills={skills} />
        </div>
    );
}

export default Skills;