import  Navbar  from './Navbar'
import './css/Forms.css';
import { Link } from 'react-router-dom';
import  Footer  from './Footer'

function Forms() {
  return (
    <div className="forms-page">
      <Navbar/>

      <div className="forms-intro">
        <h1>This is the Forms page intro portion</h1>
      </div>

      <div className="forms-body">
        <h2>Body of Forms page</h2>
      </div>

      <Footer/>
    </div>
  );
}

export default Forms;