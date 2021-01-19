import './css/Navbar.css';
import './css/Footer.css';
import './css/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="navbar">
        <h1>This is a navbar</h1>
      </div>

      <div className="home-intro">
        <h1>This is the Home page intro portion (hero images, intro paragraph, etc.)</h1>
      </div>

      <div className="home-body">
        <h2>Body of home page</h2>
      </div>
    </div>
  );
}

export default Home;
