
import  { useState } from 'react';
import '../assets/css/userlogin.css';
import { Link } from 'react-router-dom';
const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    login();
  };
  const handleReg=()=>{
      register();
  }

  const handleRegister = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      register();
      login(); 
    }
  };
  const register = () => {
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");

    x.style.left = "-450px";
    y.style.left = "50px";
    z.style.left = "110px";
  };

  const login = () => {
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");

    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
  };

  const validateInputs = () => {
   
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    
    if (!isPasswordStrong(password)) {
      alert('Password must be of 8 characters with a mix of uppercase and lowercase characters.');
      return false;
    }

   
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }

    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordStrong = (password) => {
    
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="userlogin-bg">
    <div className="form-box">
      <div className="button-box">
        <div id="btn"></div>
        <button type="button" className="toggle-btn" onClick={handleLogin}>Log In</button>
        <button type="button" className="toggle-btn" onClick={handleReg}>Register</button>
      </div>
      <div className="social-icons">
          <img src="https://res.cloudinary.com/duaotkbof/image/upload/v1708361256/wsvlujjfjbvjtvx9uhfz.png"></img>
         <img src="https://res.cloudinary.com/duaotkbof/image/upload/v1708361354/u6mzmxqq9n47oewrqs27.jpg"></img>
        <img src="https://res.cloudinary.com/duaotkbof/image/upload/v1708361390/ynjxe3yuji1fvsf0aded.png"></img>
     </div>
      <form id="login" className="input-group">
        <input type="text" className="input-field" placeholder="User id" required />
        <input type="password" className="input-field" placeholder="Enter Password" required />
        <div className='abc'>
          <input type="checkbox" className="chech-box" /><span>Remember Password</span>
        </div>
        <Link to="/nav" ><button type="button"className="submit-btn" onClick={handleLogin}>
        Login
       </button>
      </Link>
      </form>
      <form id="register" className="input-group">
        <input type="text" className="input-field" placeholder="User id" required />
        <input
          type="text"
          className="input-field"
          placeholder="Email"
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Enter a valid email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" className="input-field" placeholder="Enter Password" required onChange={(e) => setPassword(e.target.value)} />
        <input type="password" className="input-field" placeholder="Confirm Password" required onChange={(e) => setConfirmPassword(e.target.value)} />
        <div className='abc'>
          <input type="checkbox" className="chech-box" /><span>I agree</span>
        </div>
        <button type="button" className="submit-btn" onClick={handleRegister}>Register</button>
      </form>
    </div>
    </div>
    
  );
}

export default UserLogin;
