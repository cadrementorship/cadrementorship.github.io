import  Navbar  from './Navbar'
import './css/Footer.css';
import './css/Home.css';

function Home() {
  return (
    <div className="home-page">
      <Navbar/>

      <div className="home-intro">
        <div className="intro-cadre"> The Cadre Mentorship Program is an academic leadership program that helps Digital Media Arts students thrive in thier careers at San Jose State University and beyond.</div>
       
        <div className="in-grid">
         
          <div className="intro-pic1"> 
          <a href="https://www.microsoft.com/en-us/?spl=1">
           <img src="https://designshack.net/wp-content/uploads/black-texture-background-368x246.jpg"
           className="intro-img"/>
           </a>
           <div className="in-title">Lopem</div>
          </div>
          
          <div className="intro-pic2"> 
          <a href="https://www.microsoft.com/en-us/?spl=1">
          <img src="https://designshack.net/wp-content/uploads/black-texture-background-368x246.jpg"
         className="intro-img"/>
          </a>
          <div className="in-title">Lopem</div>

          </div>
          
          <div className="intro-pic3"> 
          <a href="https://www.microsoft.com/en-us/?spl=1">
          <img src="https://designshack.net/wp-content/uploads/black-texture-background-368x246.jpg"
         className="intro-img"/>
           </a>
           <div className="in-title">Lopem</div>

          </div>
          
          <div className="intro-pic4"> 
          <a href="https://www.microsoft.com/en-us/?spl=1">
          <img src="https://designshack.net/wp-content/uploads/black-texture-background-368x246.jpg"
          className="intro-img"/>
           </a>
           <div className="in-title">Lopem</div>

          </div>
          
          <div className="intro-pic5"> 
          <a href="https://www.microsoft.com/en-us/?spl=1">
          <img src="https://designshack.net/wp-content/uploads/black-texture-background-368x246.jpg"
          className="intro-img"/>
           </a>
           <div className="in-title">Lopem</div>

          </div>
          
          <div className="intro-pic6"> 
          <a href="https://www.microsoft.com/en-us/?spl=1">
          <img src="https://designshack.net/wp-content/uploads/black-texture-background-368x246.jpg"
         className="intro-img"/>
           </a>
           <div className="in-title">Lopem</div>

           </div>

          </div>

          <div className="intro-btn">
          <div className="intro-mentor"> Be a Mentor</div>
         <div className="intro-mentee"> Be a Mentee</div>
          <div className="intro-join"> Join a Committee</div>

          </div>

          

        

      </div>

      <div className="home-body">
        
        <div className="body-info">
        <div className="body-who"> Who Can Join?</div>
          <div className="body-para1">Anyone who wants to meet and connect with other digital media art majors and find out more about the program or show off your skills to newcomers. Those who want to help create a more inclusive environment and be more involved in the community should apply?  </div>
          <div className="body-why"> Why Join the Program?</div>
          <div className="body-para2"> Joining the pilot mentorship program allows you to conect with other digital media art students and learn new skills from each other. You will be able to be eligible for new opportunities to be plugged into projects and network with your fellow students. </div>
        
        </div>
      </div>

      <div className="footer">
        <h1>hello anthony how are you? (this is footer)</h1>
      </div>
      
    </div>
  );
}

export default Home;
