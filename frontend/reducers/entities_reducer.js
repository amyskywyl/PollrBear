import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import groupsReducer from "./groups_reducer";
import questionsReducer from "./questions_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  groups: groupsReducer,
  questions: questionsReducer
});

export default entitiesReducer;