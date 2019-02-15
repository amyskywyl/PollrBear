import { RECEIVE_CHOICE, REMOVE_CHOICE } from '../actions/choices';
import merge from 'lodash/merge';
import { RECEIVE_QUESTION } from '../actions/questions';
import { RECEIVE_ANSWER, CLEAR_ANSWER } from '../actions/answer';

const ChoicesReducer = ( state= {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CHOICE:
      return merge({}, state, action.choice);
    case RECEIVE_QUESTION:
      return Object.assign({}, action.data.choices);
    case REMOVE_CHOICE:
      delete newState[action.choice.id];
      return newState;
    case RECEIVE_ANSWER:
      newState[action.answer.choice_id].answer_count++;
      return merge({}, newState);
    case CLEAR_ANSWER:
      newState[action.answer.choice_id].answer_count--;
      return newState;
    default:
      return state;
  }
}

export default ChoicesReducer;