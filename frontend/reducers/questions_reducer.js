import {
  RECEIVE_ALL_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION,
  TOGGLE_ACTIVE
} from '../actions/questions';
import merge from 'lodash/merge';

const QuestionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return merge({}, action.questions);
    case RECEIVE_QUESTION:
      return merge({}, action.question);
    case REMOVE_QUESTION:
      let newState = merge({}, oldState);
      delete newState[action.question.id];
      return newState;
    case TOGGLE_ACTIVE:
      return Object.assign({}, oldState, {
        active: !state.active
      });
    default:
      return oldState;
  }
};

export default QuestionsReducer;