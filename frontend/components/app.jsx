import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import GroupIndexContainer from './groups/group_index_container';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
      <Route exact path="/" component={HomeContainer} />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/groups" component={GroupIndexContainer} />
    </Switch>
  </div>
);

export default App;