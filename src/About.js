import  Navbar  from './Navbar'
import './css/About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-page">
      <Navbar/>

      <div className="about-intro">
        <div className="about-hero">
          <img className="about-hero-img" src="https://dummyimage.com/368x200.jpg"/>
          <p className="about-hero-text">Anthony Sokry was Here, Lorem Lorem Lorem</p>
        </div>
        <hr className="about-intro-line"/>
        <p className="about-intro-text">The Cadre Mentorship Program is an academic leadership program that helps Digital Media Arts students thrive in thier careers at San Jose State University and beyond.</p>
      </div>

      <div className="about-body">
        <div className="about-bodyBtn">
              <a className="about-bodyConduct" target="_blank" href=""> CADRE MENTORSHIP CODE OF CONDUCT</a>
            </div>  
        <div className="about-bodyInfo">
          <div className="about-mento"> 
            <p className="about-bodyText">ABOUT THE MENTORS</p>
            <p><b>The role of a mentor</b> is to be a leader in the community to help foster a deeper sense of self as an artist. You will be showing the reins to a new student aiding your mentee in their career as being a digital media art major. You will also be an ambassador for the program to help share and grow amongst your fellow students.</p>                        
            <p><b>The responsibilities of a mentor</b> are to cultivate an environment of learning and growth within the mentees, also be a member of the community and work towards a better understanding of digital media art and who they are as an artist themselves. Mentors will also be responsible for teaming up with your mentee(s) to create an artwork to showcase at the end of the year showcase. Also, you are responsible to teach your specific skill, basic knowledge of your craft to have your mentees get a basic understanding of it as well. Mentors also are tasked with creating a connection with their mentees.</p>            
            <p><b>Anyone who has passed the DMA portfolio review</b> and has basic knowledge of some upper division classes (Art 101 and above). We are looking for caring and compassionate mentors that can form an inclusive community and share new forms of digital media art that other might not know about.</p>           
            <p><b>Being a mentor is not only satisfying</b> to see another person grow and learn from you but being able to help the community as a whole. You will also be able to sharpen your skills in talking about yourself as an artist and learning how best to share your information with others. We are actively trying to connect mentors with outside professional and projects. Do not forget it is something to add to your resume it could be a talking point.</p>
          </div>
         
          <div className="about-mente">
            <p className="about-bodyRole">ABOUT THE MENTEES</p>
            <p><b>The role of a mentee</b> is to learn and engage with their mentor. The mentee is tasked with the responsibilities of soaking in as much information as they can.</p>          
            <p><b>The responsibilities of a mentee</b> are to be responsive and respectful of all in the program. Be bold and think about what you want to explore, you want to make the best of this opportunity and take initiative whenever you can.</p>
            <p><b>Students currently enrolled in Art 74 or 75</b> can be considered to be a potential mentee this semester. The number of availble slots depends on the number of enrolled Mentors during the semster.</p>           
            <p><b>Being a mentee give you access</b> to a network of upperclassmen to help show you the ropes of the program and you a chance to make new friends and connections with the other mentees and mentors.</p>
          </div>
        </div>
      </div>
      <hr className="about-bodyLine2"></hr>

      <div className="footer">
        <h2>follow anthony how are you? (this is footer)</h2>
      </div>

    </div>
  );
}

export default About;