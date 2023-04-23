function Header(){
    return(
    <header id="navbar" className="navbar navbar-expand-sm navbar-dark bg-dark">
        <span className="navbar-brand" style={{zIndex: 2}}>
            <img id="logo" alt="logo" width={70} height={70} className="rounded-pill"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/computer-design-template-8f06d414cadad0e3eafc86197aa972ea_screen.jpg?ts=1626641858"/>
        </span>
        <span className="navbar-text" style={{zIndex: 2}}>Lorem ipsum dolor sit.</span>
        <ul className="navbar-nav ms-auto" style={{zIndex: 2}}> 
            {/*<li className="nav-item"><Link className="nav-link" href="/">About Me</Link></li>*/}
            <li className="nav-item"><a className="nav-link " href="#footer">Contact</a></li>
            <li className="nav-item"><a className="nav-link" href="https://github.com/GodWilldev" target="blank">my Github</a></li>
        </ul>
    </header>
    )
}

export default Header;