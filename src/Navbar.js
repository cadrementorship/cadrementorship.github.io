
import './css/Navbar.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [winWidth, setWinWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWinWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
    });
    const [cllickCollapse, setClickCollapse] = useState(false);

    function webMode() {
        if(winWidth > 600){
            return "navbar-collapse";
        }
        else {
            return "navbar-collapse-mobile";
        }
    }

    const [eleHeight, setEleHeight] = useState(0);
    const navHidden = {
        marginTop: eleHeight
    };

    const navShow = {
        marginTop: "52px"
    };

    function jsStyle(){
        if(winWidth <= 600 && cllickCollapse == true){
            return navShow;
        }
        return navHidden;
    }

    return(
        <div className="navbar">
            <div className="navbar-header">
                <Link className="navbar-title" to="/">
                    <img className="navbar-logo" src="https://asokry.github.io/cadre-mentorship-snapshot2020/img/logo_draft.png"/>
                </Link>
                <button type="button" className="navbar-toggle" onClick={()=>{setClickCollapse(!cllickCollapse)}}>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                </button>
            </div>
            <div className={webMode()} style={jsStyle()}
                ref={el => {
                    if (!el) return;
                    console.log(-el.getBoundingClientRect().height);    
                    setEleHeight(-(el.getBoundingClientRect().height + 1));
                }}
            >
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
    )
}

export default Navbar;