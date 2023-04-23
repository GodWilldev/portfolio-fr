import CardSkill from './CardSkill';

function SkillsGrid({skills}) { //list of card elements element
    const allTypes = ["Developpement de sites et d'applications Web",
    "Developpement d'applications mobile",
    "Gestion de Base de Données",
    "Maitrise de Langages de programmation", 
    "Maitrise d'outils de Versionning et Devops", "Autres Outils"];//+ "Others", Android
    //var allTypesVar = allTypes.map(elm => Script.camelCase(elm));

    var skillsFiltered = {};
    for (let i=0; i<allTypes.length; i++) {//initialize skillsFiltered
        (skillsFiltered[allTypes[i]]) = [];
    }

    skills.forEach(skill =>{
        skillsFiltered[skill.type].push(skill);
        /*
        for (let i=0; i<allTypes.length; i++) {
            if(skill.type === allTypes[i]){
                (skillsFiltered[allTypes[i]]).push(skill);
            }
            //break;
        }*/
    });
    //console.log(skillsFiltered[allTypes[1]]);
    return (   
        <div id='skills-grid'>
            {/*map over all the type of skills*/}
            {allTypes.map((type, i) => {
                return (
                <div key={"type"+i} className='container-fluid row mb-4' >
                    <h2>{type}</h2>
                    {(skillsFiltered[type]).map( skill =>{
                        return (
                        <div key={skill._id} className='col-12 col-sm-6 col-md-4 col-xl-3 col-xxl-2 px-1'> {/**center element: style={{margin : auto}} */}
                            <CardSkill key={skill._id} skill={skill} />
                        </div>)
                    })}
                </div>
                )
            })}
        </div>
    );
}
export default SkillsGrid;
