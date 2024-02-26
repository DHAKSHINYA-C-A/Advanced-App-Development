
import '../assets/css/landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="app-container">
      <div className="user-image">
        <Link to="/userLogin"><img className="limg"src="https://res.cloudinary.com/duaotkbof/image/upload/v1708606507/361-3616142_wittywe-win-a-badge-senior-citizen-love-cartoon_rjrcnh.jpg" alt="User" /></Link>
        <p>User</p>
      </div>
      <div className="admin-image">
        <Link to="/aLogin"><img className="limg" src="https://res.cloudinary.com/duaotkbof/image/upload/v1708606668/images_wj0t4d.jpg" alt="Admin" /></Link>
        <p>Admin</p>
      </div>
    </div>
  );
};

export default Landing;
