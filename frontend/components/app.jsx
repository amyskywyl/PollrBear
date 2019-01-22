import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <Link to="/" className="header_link">
        <h1>Pollr Bear</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;