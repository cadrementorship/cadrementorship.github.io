
import './css/Navbar.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [cllickCollapse, setClickCollapse] = useState(false);

    return(
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-header">
                    <Link className="navbar-logo" to="/">
                        <img className="navbar-img" src="images/logo/cube-logo.png"/>
                    </Link>
                    <button type="button" className="navbar-toggle" onClick={()=>{setClickCollapse(!cllickCollapse)}}>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>                        
                    </button>
                </div>
                <div className={cllickCollapse ? "navbar-collapse active" : "navbar-collapse"}>
                    <ul className="navbar-center">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/people">People</Link></li>
                        {/* <li><Link to="/forms">Forms</Link></li> */}
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                    <ul className="navbar-right">
                        <li><a href="https://cadrementorship.github.io/showcase-f20/main.html">F20</a></li>
                        {/* <li><Link to="/">SP21</Link></li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;