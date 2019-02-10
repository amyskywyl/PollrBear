import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import groupsReducer from "./groups_reducer";
import questionsReducer from "./questions_reducer";
import choiceReducer from "./choice_reducer";
import answerReducer from "./answers_reducer";
import activeReducer from "./active_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  groups: groupsReducer,
  questions: questionsReducer,
  choices: choiceReducer,
  answers: answerReducer,
  active: activeReducer
});

export default entitiesReducer;