import  Navbar  from './Navbar'
import './css/Footer.css';
import './css/Home.css';

function Home() {
  return (
    <div className="home-page">
      <Navbar/>

      <div className="home-intro">
        <h1>This is the Home page intro portion (hero images, intro paragraph, etc.)</h1>
      </div>

      <div className="home-body">
        <h2>Body of home page</h2>
      </div>

      <div className="footer">
        <h1>hello anthony how are you? (this is footer)</h1>
      </div>
      
    </div>
  );
}

export default Home;
