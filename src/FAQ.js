import  Navbar  from './Navbar'
import './css/FAQ.css';
import { Link } from 'react-router-dom';
import  Footer  from './Footer'

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
          <img className="faq-hero-img" src="https://dummyimage.com/368x200.jpg"/>
          <p className="faq-hero-text">Anthony Sokry was Here, Lorem Lorem Lorem</p>
        </div>
        <hr className="faq-intro-line"/>
        <p className="faq-intro-text">The Cadre Mentorship Program is an academic leadership program that helps Digital Media Arts students thrive in thier careers at San Jose State University and beyond.</p>
      </div>

      <div className="faq-body">
        <div className="faq-body-all-questions">
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
            <p className="faq-body-answer-text">The Mentorship program is a pilot program we created this summer and will be launching this school year! This program will consist of 10 mentors and 20 mentees this semester, it will be a year long program but will be divided into two parts one per semester.</p>
            <p className="faq-body-answer-back">Link to go back to questions list</p>
          </div>
            {/* to here  */}

          <div id="a2"className="faq-body-answer">
            <h2 className="faq-body-answer-title">How do I become a mentor?</h2>
            <p className="faq-body-answer-text">Fill out and submit a <a href="">Mentor Application</a>. The application is provided under the "Forms" tab.</p>
            <p className="faq-body-answer-back">Link to go back to questions list</p>
          </div>

          <div id="a3"className="faq-body-answer">
            <h2 className="faq-body-answer-title">How do I become a mentee?</h2>
            <p className="faq-body-answer-text">We are currently not accepting Mentee Applications this semester.</p>
            <p className="faq-body-answer-back">Link to go back to questions list</p>
          </div>

          <div className="faq-body-answer">
            <h2 className="faq-body-answer-title">What if I'm not chosen to be part of the program?</h2>
            <p className="faq-body-answer-text">Even if you don't get to be part of the program, you can still be an active member of the community by helping and teaching others.</p>
            <p className="faq-body-answer-back">Link to go back to questions list</p>
          </div>          
          
          <div className="faq-body-answer">
            <h2 className="faq-body-answer-title">What are the rules of the program?</h2>
            <p className="faq-body-answer-text">Please read our <a href="">Code of Conduct</a>.</p>
            <p className="faq-body-answer-back">Link to go back to questions list</p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default FAQ;