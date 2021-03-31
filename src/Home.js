import  Navbar  from './Navbar'
import './css/Footer.css';
import './css/Home.css';

function Home() {
  return (
    <div className="home-page">
      <Navbar/>

      <p className="home-intro-cadre">
        The Cadre Mentorship Program is an academic leadership program that helps Digital Media Arts students thrive in thier careers at San Jose State University and beyond.
        </p>

      <div className="home-intro">      
        <div className="home-in-grid">         
          <div className="home-intro-pic1"> 
            <a href="https://www.microsoft.com/en-us/?spl=1">
              <img src="https://designshack.net/wp-content/uploads/black-texture-background-368x246.jpg"
                className="home-intro-img"/>
            </a>
            <div className="home-in-title">Lopem</div>
          </div>
          
          <div className="home-intro-pic2"> 
           <a href="https://www.microsoft.com/en-us/?spl=1">
              <img src="https://designshack.net/wp-content/uploads/black-texture-background-368x246.jpg"
                className="home-intro-img"/>
            </a>
          <div className="home-in-title">Lopem</div>

          </div>
          
          <div className="home-intro-pic3"> 
            <a href="https://www.microsoft.com/en-us/?spl=1">
                <img src="https://designshack.net/wp-content/uploads/black-texture-background-368x246.jpg"
                  className="home-intro-img"/>
            </a>
           <div className="home-in-title">Lopem</div>

          </div>
          
          <div className="home-intro-pic4"> 
            <a href="https://www.microsoft.com/en-us/?spl=1">
                <img src="https://designshack.net/wp-content/uploads/black-texture-background-368x246.jpg"
                  className="home-intro-img"/>
            </a>
           <div className="home-in-title">Lopem</div>

          </div>
          
          <div className="home-intro-pic5"> 
            <a href="https://www.microsoft.com/en-us/?spl=1">
                <img src="https://designshack.net/wp-content/uploads/black-texture-background-368x246.jpg"
                  className="home-intro-img"/>
            </a>
           <div className="home-in-title">Lopem</div>

          </div>
          
          <div className="home-intro-pic6"> 
            <a href="https://www.microsoft.com/en-us/?spl=1">
                <img src="https://designshack.net/wp-content/uploads/black-texture-background-368x246.jpg"
                  className="home-intro-img"/>
            </a>
           <div className="home-in-title">Lopem</div>

          </div>

        </div>

          <div className="home-intro-btn">
            <div className="home-intro-mentor"> Be a Mentor</div>
            <div className="home-intro-mentee"> Be a Mentee</div>
            <div className="home-intro-join"> Join  Committee</div>
          </div>  
      </div>

      <div className="home-body">
       
        <div className="home-body-info">
        
          <div className="home-body-who"> 
            <p className="home-body-texwho">Who Can Join?</p>
            <p>Joining the pilot mentorship program allows you to conect with other digital media art students and learn new skills from each other. You will be able to be eligible for new opportunities to be plugged into projects and network with your fellow students.</p>
          </div>
          <div className="home-body-why">
            <p className="home-body-texwhy">Why Join the Program?</p>
            <p>Anyone who wants to meet and connect with other digital media art majors and find out more about the program or show off your skills to newcomers. Those who want to help create a more inclusive environment and be more involved in the community should apply? </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <h1>hello anthony how are you? (this is footer)</h1>
      </div>
      
    </div>
  );
}

export default Home;
