import './css/Navbar.css';
import './css/About.css';

function About() {
  return (
    <div className="about">
      <div className="navbar">
        <h1>This is a navbar</h1>
      </div>

      <div className="about-intro">
        <h1>This is the about page intro portion</h1>
      </div>

      <div className="about-body">
        <h2>Body of about page</h2>
      </div>
    </div>
  );
}

export default About;