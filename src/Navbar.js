
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

    // function webMode() {
    //     if(winWidth > 600){
    //         return "navbar-collapse";
    //     }
    //     else {
    //         return "navbar-collapse-mobile";
    //     }
    // }

    const [eleHeight, setEleHeight] = useState(0);
    const navHidden = {height: 0};
    const navShow = {height: eleHeight};

    function jsStyle(){
        if(winWidth <= 600 && cllickCollapse == true){
            return navShow;
        }
        else if (winWidth <= 600 && cllickCollapse == false){
            return navHidden;
        }
    }

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
                {/* style={jsStyle()}  */}
                {/* winWidth > 600 ? "navbar-collapse" : "navbar-collapse-mobile" */}
                <div className={cllickCollapse ? "navbar-collapse active" : "navbar-collapse"}
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
        </div>
    )
}

export default Navbar;