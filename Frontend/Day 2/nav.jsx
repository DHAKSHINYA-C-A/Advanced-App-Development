import '../assets/css/nav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faUser , faPowerOff } from '@fortawesome/free-solid-svg-icons';
import Typed from 'typed.js';
import { useEffect } from 'react';
import About from './about';
import Services from './services';
import Review from './reviews';
import Contact from './contact';
import Footer from './footer';
const Nav = () => {
  useEffect(() => {
    const typed = new Typed('.typing', {
      strings: ["Companion Care", "HouseKeeping", "24/7 Support", "Medicatoin", "Health", "Fitness"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });


    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="app">
      <div className="header">
        <div className="logo">
         <img src="https://res.cloudinary.com/duaotkbof/image/upload/v1708529649/illustration-stickman-senior-citizens-260nw-127698062_nnqikw.jpg"/>
        </div>
        <div className="nav">
          <ul>
            <li><a href="#"> Home</a></li>
            <li><a href="#About"> About</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Review"> Review</a></li>
            <li><a href="#Contact">FeedBack</a></li>
            <li><a href="#"> Blogs</a></li>
          </ul>
        </div>
        <div className="icon">
          <div className='abcd'><FontAwesomeIcon icon={faSearch} /></div>
          <Link to="/uProfile"><div className='abcd'><FontAwesomeIcon icon={faUser} /></div></Link>
          <Link to="/"><div className='abcd'><FontAwesomeIcon icon={faPowerOff} /></div></Link>
        </div>
      </div>
      <div className="main"> 
          <div className='men_text'>
            <h1>Elderly <span>services</span></h1>
            <h2>Available here: <br></br><span className='typing'></span></h2>
          </div>
          <div className='main_image'>
              <img className='img2' src="https://res.cloudinary.com/duaotkbof/image/upload/v1708613885/240_F_657818134_Z2B5B6UNtIpvsTu7tegCU2jrTVg8bWmj_i79mxk.jpg"/>
          </div>
      </div>
      <p className='para'>Welcome to a place where compassionate care meets the comfort of home.
         At our senior home care services, we are dedicated to cherishing golden
          moments and providing support that feels like family. Our mission is to
           embrace the joys of aging with dignity, offering gentle and personalized
            assistance that nurtures independence. Your loved ones deserve more 
            than just care; they deserve a haven where every day feels like home. We 
            understand the importance of tailoring our services to meet the unique 
            needs of each individual, creating a warm and inviting environment that 
            elevates lives and enables a vibrant senior life. </p>
            <div className='main_btn'>
              <a href="#">Book now</a>
              <i className='fa-solid fa-angle-right'></i>
            </div>
            <div id="About" className="available">
              <About/>
            </div>

            <div id="Services" className="available">
            <Services/>
            </div>
            <div id="Review" className="available">
            <Review/>
            </div>
            <div id="Contact" className="available">
            <Contact/>
            </div>
            <div id="Footer" className="available">
            <Footer/>
            </div>

    </div>
    
  );
}; 

export default Nav;
