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
    <hgroup className="header-group">
      <Link to="/" className="header_link">
        <h1 className="logo">Pollr Bear</h1>
      </Link>
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default NavBar;