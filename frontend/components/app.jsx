import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import GroupIndexContainer from './groups/group_index_container';
import EditGroupFormContainer from './groups/edit_group_form_container';
import QuestionIndexContainer from './questions/question_index_container';
import QuestionShowContainer from './questions/question_show_container';
import EditQuestionFormContainer from './questions/edit_question_form_container';
import CreateQuestionFormContainer from './questions/create_question_form_container';
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
      <Route path="/groups/:groupId/edit" component={EditGroupFormContainer} />
      <Route exact path="/questions" component={QuestionIndexContainer} />
      <Route exact path="/questions/:questionId" component={QuestionShowContainer} />
      <Route path="/questions/:questionId/edit" component={EditQuestionFormContainer} />
      <Route path="/questions/:questionId/new" component={CreateQuestionFormContainer} />
    </Switch>
  </div>
);

export default App;