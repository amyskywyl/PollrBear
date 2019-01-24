import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="nav-primary">
      <div className="login-signup">
        <Link to="/" className="header_link">
          <h1 className="logo">Pollr Bear</h1>
        </Link>
        <div>
          <Link className="login" to="/login">Log in</Link>
          <Link className="signup" to="/signup">Sign up</Link>
        </div>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <nav className="nav-loggedin">
      <div className="mypolls-logout">
        <Link to="/" className="header_link">
          <h1 className="logo">Pollr Bear</h1>
        </Link>
        <div>
          <h2 className="header-name">Hi, {currentUser.username}!</h2>
          <button className="header-button" onClick={logout}>Log Out</button>
        </div>
      </div>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default NavBar;