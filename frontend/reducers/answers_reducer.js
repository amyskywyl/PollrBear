import { RECEIVE_ANSWER, CLEAR_ANSWER } from '../actions/answer';
import { merge } from 'lodash';

const answersReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANSWER:
      return merge({}, state, action.answer);
    case CLEAR_ANSWER:
      return {};
    default:
      return state;
  }
};

export default answersReducer;