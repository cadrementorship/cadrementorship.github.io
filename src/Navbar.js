
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
                        <img className="navbar-img" src="https://asokry.github.io/cadre-mentorship-snapshot2020/img/logo_draft.png"/>
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
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Forms</Link></li>
                        <li><Link to="/">FAQ</Link></li>
                        {/* <li><Link to="/">Forms</Link></li>
                        <li><Link to="/">FAQ</Link></li> */}
                    </ul>
                    <ul className="navbar-right">
                        <li><Link to="/">F20</Link></li>
                        <li><Link to="/">SP21</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;