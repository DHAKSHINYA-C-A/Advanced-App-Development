


import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

import '../assets/css/userlogin.css';

const UserLogin = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleLogin = async (e) => {
    e.preventDefault();
    login();
    try {
        const response = await Axios.post('http://localhost:8080/products/authenticate', {
            username: name,
            password: password,
        });
       
        const { token, roles,id } = response.data;
        localStorage.setItem('id', id);
        localStorage.setItem('token', token);
        localStorage.setItem('roles', roles); // Save roles in local storage
        console.log(token);
        console.log(roles);
        if (roles === 'ADMIN') {
            navigate('/aHome');
        } else {
            navigate('/Nav');
        }
    } catch (error) {
        console.error('Error logging in:', error);
    }
};


  const handleReg = () => {
    register();
  };

  const register = () => {
    var x = document.getElementById('login');
    var y = document.getElementById('register');
    var z = document.getElementById('btn');

    x.style.left = '-450px';
    y.style.left = '50px';
    z.style.left = '110px';
  };
    const login = () => {
    var x = document.getElementById('login');
    var y = document.getElementById('register');
    var z = document.getElementById('btn');

    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';
  };

  const validateInputs = () => {
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (!isPasswordStrong(password)) {
      alert('Password must be at least 8 characters with a mix of uppercase and lowercase characters.');
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
    return password.length >= 8;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (validateInputs()) {
      try {
        const response = await Axios.post('http://localhost:8080/products/new', {
          name,
          email,
          password,
          roles: 'USER',
        });
        console.log(response.data);
        login();  
      } catch (error) {
        console.error('Error registering user:', error);
      }
    }
  };

  return (
    <div className="userlogin-bg">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <button type="button" className="toggle-btn" onClick={handleLogin}>
            Log In
          </button>
          <button type="button" className="toggle-btn" onClick={handleReg}>
            Register
          </button>
        </div>
        <div className="social-icons">
          <img src="https://res.cloudinary.com/duaotkbof/image/upload/v1708361256/wsvlujjfjbvjtvx9uhfz.png" alt="icon"></img>
          <img src="https://res.cloudinary.com/duaotkbof/image/upload/v1708361354/u6mzmxqq9n47oewrqs27.jpg" alt="icon"></img>
          <img src="https://res.cloudinary.com/duaotkbof/image/upload/v1708361390/ynjxe3yuji1fvsf0aded.png" alt="icon"></img>
        </div>
        <form id="login" className="input-group" onSubmit={handleLogin}>
          <input
            type="text"
            className="input-field"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="abc">
            <input type="checkbox" className="chech-box" />
            <span>Remember Password</span>
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        <form id="register" className="input-group">
          <input type="text" className="input-field" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
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
          <input
            type="password"
            className="input-field"
            placeholder="Confirm Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="abc">
            <input type="checkbox" className="chech-box" />
            <span>I agree</span>
          </div>
          <button type="button" className="submit-btn" onClick={handleRegister}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;


