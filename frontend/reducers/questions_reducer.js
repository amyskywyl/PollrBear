
import { RECEIVE_NEW_GROUP, UPDATE_ORDER_FRONT_END } from '../actions/groups';
import { RECEIVE_NEW_QUESTION, REMOVE_QUESTION, RECEIVE_UPDATED_QUESTION } from '../actions/questions';
import { merge } from 'lodash';

const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let question;

  switch (action.type) {
    case RECEIVE_NEW_GROUP:
      return merge({}, newState, action.questions);

    case RECEIVE_NEW_QUESTION:
      return merge({}, newState, action.questions);

    case RECEIVE_UPDATED_QUESTION:
      question = Object.values(action.question)[0];
      newState[question.id] = question;
      return newState;

    case UPDATE_ORDER_FRONT_END:
      newState[action.payload.question.id].column_id = action.payload.future_col;
      return newState;

    case REMOVE_QUESTION:
      delete newState[action.question.id];
      return newState;

    default:
      return state;
  }

};

export default questionsReducer;