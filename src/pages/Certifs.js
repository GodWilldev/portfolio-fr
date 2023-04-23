import CardCertif from '../components/CardCertif.js';


function Certifs({certifs}) { //list of card elements element

    return (   
        <div className='container-fluid row mt-3'>
            {/*map over all the certifs*/}
            { certifs.map(certif => (
                <div key={certif._id} className='col-12 col-md-6 col-xl-4 px-1 px-sm-5 px-md-1 px-lg-3 px-xl-1 px-xxl-3 mb-3'>
                    <CardCertif key={certif._id} certif={certif}/>
                </div>
            ))}
        </div>
    );
}
export default Certifs;