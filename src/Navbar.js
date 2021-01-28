
import './css/Navbar.css';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <div className="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                <Link className="navbar-title" to="/">
                    <img className="navbar-logo" src="https://asokry.github.io/cadre-mentorship-snapshot2020/img/logo_draft.png"/>
                </Link>
                </div>
                <div className="navbar-collapse">
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