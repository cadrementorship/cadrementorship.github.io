import './css/Footer.css';
import React from 'react';

function Footer() {

    return(
        <div className="footer">
                <a href="mailto:cadrementorship@gmail.com" className=" socials fa fa-envelope"></a>
                <a href="https://www.instagram.com/cadrementorship/" target="_blank" className="socials fa fa-instagram"></a>
                <a href="https://www.linkedin.com/company/cadre-mentorship-program" target="_blank" className="socials devicon-linkedin-plain"></a>
        </div>
    )
}

export default Footer;