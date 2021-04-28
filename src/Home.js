import  Navbar  from './Navbar'
import './css/Home.css';
import  Footer  from './Footer'

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
            <a href="https://cadrementorship.github.io/showcase-f20/teams/carayci.html">
              <img src="images/hero-img/FragileDreams.jpg"
                className="home-intro-img"/>
            </a>
            <div className="home-in-title">Fragile Dreams, Cameron Chung &amp; Cindy Tran &amp; Raymond Lam</div>
          </div>
          
          <div className="home-intro-pic2"> 
           <a href="https://cadrementorship.github.io/showcase-f20/teams/mrap.html">
              <img src="images/hero-img/lucidDream.jpg"
                className="home-intro-img"/>
            </a>
          <div className="home-in-title">Lucid Dream, Christian Acosta &amp; Cole Pergerson</div>

          </div>
          
          <div className="home-intro-pic3"> 
            <a href="https://cadrementorship.github.io/showcase-f20/teams/charlesxTyler.html">
                <img src="images/hero-img/PandorasBox.jpg"
                  className="home-intro-img"/>
            </a>
           <div className="home-in-title">Pandora's Box, Charles Graciano &amp; Tyler Stannard</div>

          </div>
          
          <div className="home-intro-pic4"> 
            <a href="https://cadrementorship.github.io/showcase-f20/teams/alyssonD.html">
                <img src="images/hero-img/lucid.jpg"
                  className="home-intro-img"/>
            </a>
           <div className="home-in-title">Lucid, Alyssa Castenada &amp; Derek Kwok &amp; Jason Manzon</div>

          </div>
          
          <div className="home-intro-pic5"> 
            <a href="https://cadrementorship.github.io/showcase-f20/teams/sonice.html">
                <img src="images/hero-img/Metamorphosis.jpg"
                  className="home-intro-img"/>
            </a>
           <div className="home-in-title">Metamorphosis, Sophia Gillenburg &amp; Berenice Cortes</div>

          </div>
          
          <div className="home-intro-pic6"> 
            <a href="https://cadrementorship.github.io/showcase-f20/teams/vandy.html">
                <img src="images/hero-img/SummerDreamscape.jpg"
                  className="home-intro-img"/>
            </a>
           <div className="home-in-title">Summer Dreamscape, Van Nguyen &amp; Andy Wu</div>

          </div>

        </div>

          <div className="home-intro-btn">
            <a className="home-intro-mentor home-intro-null-btn" target="_blank"> Be a Mentor</a>
            <a className="home-intro-mentee home-intro-null-btn" target="_blank"> Be a Mentee</a>
            <a className="home-intro-join" target="_blank" href="https://forms.gle/kRwDiYMjV5VL2Csu9"> Join the Committee</a>
          </div>  
      </div>

      <div className="home-body">
       
        <div className="home-body-info">
        
          <div className="home-body-who"> 
            <p className="home-body-texwho">Who Can Join?</p>
            <p>Anyone who wants to meet and connect with other digital media art majors and find out more about the program or show off your skills to newcomers. Those who want to help create a more inclusive environment and be more involved in the community should apply!</p>
          </div>
          <div className="home-body-why">
            <p className="home-body-texwhy">Why Join the Program?</p>
            <p>Joining the pilot mentorship program allows you to connect with other digital media art students and learn new skills from each other. You will be able to be eligible for new opportunities to be plugged into projects and network with your fellow students.</p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;
