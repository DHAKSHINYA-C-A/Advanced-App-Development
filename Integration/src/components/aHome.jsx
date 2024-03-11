
import { Link } from 'react-router-dom';
import '../assets/css/aHome.css';
const AHome = () => {
  return (
    <div className="sidebar">
    <div className="logo1">
      <img className="lo" src="https://res.cloudinary.com/duaotkbof/image/upload/v1708710499/yjqdvxkflubhuelb4hfm-removebg-preview_ibbjo9.png"/>
    </div>
    <div className="menu">
      <ul>
        <li className='lis'>Profile</li>
        <Link to="/dashboard" className='link'><li className='lis'>Dashboard</li></Link>
        <Link to="/uManage" className='link'><li  className='lis'>Services Management</li></Link>
        <Link to="/feedback" className='link'><li  className='lis'>FeedBacks</li></Link>
        <Link to="/booking" className='link'><li  className='lis'>Booking Status</li></Link>
        <Link to="/" className='link'><li  className='lis'>Logout</li></Link>
      </ul>
    </div>
  </div>
  );
};

export default AHome;
