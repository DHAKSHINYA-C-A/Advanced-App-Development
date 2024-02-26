import '../assets/css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer>
        <div className='footer_main'>
            <div className='footer_tag'>
                <h2>Location</h2>
                <p>Chennai</p>
                <p>Coimbatore</p>
                <p>Erode</p>
                <p>Salem</p>
                <p>Madurai</p>
            </div>
            <div className='footer_tag'>
                <h2>Quick Links</h2>
                <p>Home</p>
                <p>About us</p>
                <p>Services</p>
                <p>Reviews</p>
                <p>FeedBack</p>
            </div>
            <div className='footer_tag'>
                <h2>Contact</h2>
                <p>01-----------</p>
                <p>01-----------</p>
                <p>abcdesigner@gmail.com</p>
                <p>abcdesigner@gmail.com</p>
            </div>
            <div className='footer_tag'>
                <h2>Our Services</h2>
                <p>Good Quality</p>
                <p>Easy Payment</p>
                <p>24 Hour Service</p>
            </div>
            <div className='footer_tag'>
             <h2>Follow</h2>
                <div className='icon-wrapper'>
                    <FontAwesomeIcon className='abcde' icon={faFacebook} />
                    <FontAwesomeIcon className='abcde'icon={faTwitter} />
                    <FontAwesomeIcon className='abcde'icon={faInstagram} />
                    <FontAwesomeIcon className='abcde'icon={faLinkedin} />
                 </div>
            </div>
        </div>
       
    </footer>
  );
};

export default Footer;
