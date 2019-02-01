import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = ({ currentUser, logout, history }) => {
  const sessionLinks = () => (
    <nav className="nav-home">
      <div className="login-signup">
        <Link to="/" className="header_link">
          <h1 className="logo">
            <img className="logo-img" src={window.logoURL}/>
            Pollr Bear
          </h1>
        </Link>
        <div>
          <Link className="login navl" to="/login">Log in</Link>
          <Link className="signup navb" to="/signup">Sign up</Link>
        </div>
      </div>
    </nav>
  );
  const handleClick = () => {
    logout().then(() => history.push("/"))
  }
  const personalGreeting = () => (
    <nav className="nav-home">
      <div className="login-signup">
        <Link to="/" className="header_link">
          <h1 className="logo">Pollr Bear</h1>
        </Link>
        <div>
          <Link className="mypolls navb" to="/groups">My polls</Link>
          {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
          <button className="logout navl" onClick={handleClick}>Log Out</button>
        </div>
      </div>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default withRouter(NavBar);