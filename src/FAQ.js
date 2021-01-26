import './css/FAQ.css';
import { Link } from 'react-router-dom';

function FAQ() {
  return (
    <div className="faq-page">
      <div className="navbar">
        <h1>This is a navbar</h1>
      </div>

      <div className="faq-intro">
        <h1>This is the faq page intro portion</h1>
      </div>

      <div className="faq-body">
        <h2>Body of faq page</h2>
      </div>

      <div className="footer">
        <h1>hello anthony how are you? (this is footer)</h1>
      </div>
      
    </div>
  );
}

export default FAQ;