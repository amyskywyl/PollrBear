import { RECEIVE_CHOICE, REMOVE_CHOICE } from '../actions/choices';
import merge from 'lodash';

const ChoicesReducer = ( state= {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHOICE:
      return merge({}, state, action.choice)
    case REMOVE_CHOICE:
      let newState = merge({}, state);
      delete newState[action.choice.id];
      return newState;
    default:
      return state;
  }
}

export default ChoicesReducer;