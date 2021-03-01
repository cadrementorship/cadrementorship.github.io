import  Navbar  from './Navbar'
import './css/FAQ.css';
import { Link } from 'react-router-dom';

function FAQ() {
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
            <li><p className="faq-body-question">Question 1</p></li>
            <li><p className="faq-body-question">Question 1</p></li>
            <li><p className="faq-body-question">Question 1</p></li>
            <li><p className="faq-body-question">Question 1</p></li>
          </ul>
        </div>

        <div className="faq-body-all-answers">
          <div className="faq-body-answer">
            <h2 className="faq-body-answer-title">Question here</h2>
            <p className="faq-body-answer-text">Answer here</p>
            <p className="faq-body-answer-back">Link to go back to questions list</p>
          </div>

          <div className="faq-body-answer">
            <h2 className="faq-body-answer-title">Question here</h2>
            <p className="faq-body-answer-text">Answer here</p>
            <p className="faq-body-answer-back">Link to go back to questions list</p>
          </div>

          <div className="faq-body-answer">
            <h2 className="faq-body-answer-title">Question here</h2>
            <p className="faq-body-answer-text">Answer here</p>
            <p className="faq-body-answer-back">Link to go back to questions list</p>
          </div>

          <div className="faq-body-answer">
            <h2 className="faq-body-answer-title">Question here</h2>
            <p className="faq-body-answer-text">Answer here</p>
            <p className="faq-body-answer-back">Link to go back to questions list</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <h1>hello anthony how are you? (this is footer)</h1>
      </div>
      
    </div>
  );
}

export default FAQ;