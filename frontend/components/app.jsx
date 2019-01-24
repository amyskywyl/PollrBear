import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './home/home';
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <NavBarContainer />
      <Route exact path="/" component={HomeContainer} />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;