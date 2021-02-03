
import './css/Navbar.css';
import React, {Component, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function webMode() {
    // const [winWidth, setWinWidth] = useState(window.innerWidth);
    const winWidth = window.innerWidth;
    // useEffect(() => {
    //     const handleResize = () => {
    //         setWinWidth(window.innerWidth);
    //     };
    //     window.addEventListener("resize", handleResize);
    // }, 0);
    
    if(winWidth > 600){
        return "navbar-collapse";
    }
    else {
        return "navbar-collapse-mobile";
    }
}

class Navbar extends Component {

    render() {
        return(
            <div className="navbar">
                <div className="navbar-header">
                <Link className="navbar-title" to="/">
                    <img className="navbar-logo" src="https://asokry.github.io/cadre-mentorship-snapshot2020/img/logo_draft.png"/>
                </Link>
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                </button>
                </div>
                <div className={webMode()}>
                    <ul className="navbar-center">
                    <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Forms</Link></li>
                        <li><Link to="/">FAQ</Link></li>
                        <li><Link to="/">Forms</Link></li>
                        <li><Link to="/">FAQ</Link></li>
                    </ul>
                    <ul className="navbar-right">
                        <li><Link to="/">F20</Link></li>
                        <li><Link to="/">SP21</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;