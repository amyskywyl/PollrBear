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
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>

      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/groups" component={GroupIndexContainer} />
      <ProtectedRoute path="/groups/:groupId/edit" component={EditGroupFormContainer} />
      <ProtectedRoute path="/questions/:questionId/edit" component={EditQuestionFormContainer} />
      <ProtectedRoute exact path="/questions" component={QuestionIndexContainer} />
      <ProtectedRoute exact path="/questions/new" component={CreateQuestionFormContainer} />
      <Route exact path="/questions/:questionId" component={QuestionShowContainer} />
      <Route exact path="/" component={HomeContainer} />

  </div>
);

export default App;