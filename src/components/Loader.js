import '../styles/loader.css';
function Loader({noText}) { 
    return(
        <div id="loader-container">
            <div id="loader"></div>
            {!noText && (
            <div>
                <p className='h2 text-white'> Loading...</p>
            </div>
            )}
        </div>
    )
}

export default Loader;