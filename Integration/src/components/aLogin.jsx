import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/aLogin.css';
import { faFacebook, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function aLogin() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === '123') {
      <Link to="/admin" />;
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-icon">
      <FontAwesomeIcon icon={faFacebook}/>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default aLogin;