
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
        <li className='lis'>Dashboard</li>
        <Link to="/uManage" className='link'><li  className='lis'>User Management</li></Link>
        <li  className='lis'>Services Management</li>
        <li  className='lis'>Booking Status</li>
        <li  className='lis'>Logout</li>
      </ul>
    </div>
  </div>
  );
};

export default AHome;
