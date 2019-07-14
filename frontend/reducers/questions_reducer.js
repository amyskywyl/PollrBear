import {
  RECEIVE_ALL_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION,
  CLEAR_QUESTION,
  TOGGLE_ACTIVE,
  RECEIVE_NEW_QUESTION,
} from '../actions/questions';
import merge from 'lodash/merge';
import { RECEIVE_ALL_GROUPS } from '../actions/groups';

const QuestionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
      return merge({}, action.questions);
    case RECEIVE_QUESTION:
      return merge({}, oldState, {[action.data.question.id]: action.data.question});
    case RECEIVE_NEW_QUESTION:
      return merge({}, action.question);
    case REMOVE_QUESTION:
      let newState = merge({}, oldState);
      delete newState[action.question.id];
      return newState;
    case CLEAR_QUESTION:
      return {};
    default:
      return oldState;
  }
};

export default QuestionsReducer;