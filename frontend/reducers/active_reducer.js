import { RECEIVE_ACTIVE, CLEAR_ACTIVE } from '../actions/active';
import { merge } from 'lodash';

const null_active = { body: "", id: -1, question_id: null };

const activeReducer = (state = null_active, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ACTIVE:
      if (action.active.question_id) {
        return action.active
      } else {
        return null_active;
      }
    case CLEAR_ACTIVE:
      return null_active;
    default:
      return state;
  }
};

export default activeReducer;