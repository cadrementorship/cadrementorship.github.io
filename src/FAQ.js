import  Navbar  from './Navbar'
import './css/FAQ.css';
import { Link } from 'react-router-dom';
import  Footer  from './Footer'
import codeConduct from './cadre_mentorship_code_of_conduct.pdf';

function FAQ() {
  function scrollTo(id){
    if(document.querySelector(id)){
      document.querySelector(id).scrollIntoView();
    }
  }

  return (
    <div className="faq-page">
      <Navbar/>

      <div className="faq-intro">
        <div className="faq-hero">
          <a href="https://cadrementorship.github.io/showcase-f20/teams/catson.html">
            <img className="faq-hero-img" src="images/hero-img/LayWithMeBeneaththeGeminiSky.jpg"/>
            <p className="faq-hero-text">Lay With Me Beneath the Gemini Sky, Catherine Thy Le &amp; Eddson Jose</p>
          </a>
        </div>
        <hr className="faq-intro-line"/>
        <p className="faq-intro-text">The Cadre Mentorship Program is an academic leadership program that helps Digital Media Arts students thrive in thier careers at San Jose State University and beyond.</p>
      </div>

      <div className="faq-body">
        <div className="faq-body-all-questions" id="allQs">
          <h1 className="faq-body-questions-title">Frequently Asked Questions</h1>
          <ul className="faq-body-list">
            <li><p className="faq-body-question" onClick={()=>{scrollTo("#a1")}}>What is the Cadre Mentorship Program?</p></li>
            <li><p className="faq-body-question" onClick={()=>{scrollTo("#a2")}}>How do I become a mentor?</p></li>
            <li><p className="faq-body-question" onClick={()=>{scrollTo("#a3")}}>How do I become a mentee?</p></li>
            <li><p className="faq-body-question">What if I'm not chosen to be part of the program?</p></li>            
            <li><p className="faq-body-question">What are the rules of the program?</p></li>
          </ul>
        </div>

        <div className="faq-body-all-answers">
          {/* copy here  */}
          <div id="a1" className="faq-body-answer">
            <h2 className="faq-body-answer-title">What is the Cadre Mentorship Program?</h2>
            <p className="faq-body-answer-text">The CADRE Mentorship Program is an academic leadership program that helps Digital Media Arts students thrive in their careers at San Jose State University and beyond.</p>
            <p className="faq-body-answer-back" onClick={()=>{scrollTo("#allQs")}}>Link to go back to questions list</p>
          </div>
            {/* to here  */}

          <div id="a2"className="faq-body-answer">
            <h2 className="faq-body-answer-title">How do I become a mentor?</h2>
            <p className="faq-body-answer-text">We are no longer looking for mentors for this semester.</p>
            <p className="faq-body-answer-back" onClick={()=>{scrollTo("#allQs")}}>Link to go back to questions list</p>
          </div>

          <div id="a3"className="faq-body-answer">
            <h2 className="faq-body-answer-title">How do I become a mentee?</h2>
            <p className="faq-body-answer-text">We are currently not accepting Mentee Applications this semester.</p>
            <p className="faq-body-answer-back" onClick={()=>{scrollTo("#allQs")}}>Link to go back to questions list</p>
          </div>

          <div className="faq-body-answer">
            <h2 className="faq-body-answer-title">What if I'm not chosen to be part of the program?</h2>
            <p className="faq-body-answer-text">Even if you don't get to be a mentee or mentor, you can still be an active member of the community by helping and teaching others.</p>
            <p className="faq-body-answer-back" onClick={()=>{scrollTo("#allQs")}}>Link to go back to questions list</p>
          </div>          
          
          <div className="faq-body-answer">
            <h2 className="faq-body-answer-title">What are the rules of the program?</h2>
            <p className="faq-body-answer-text">Please read our <a target="_blank" href={codeConduct}>Code of Conduct</a>.</p>
            <p className="faq-body-answer-back" onClick={()=>{scrollTo("#allQs")}}>Link to go back to questions list</p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default FAQ;