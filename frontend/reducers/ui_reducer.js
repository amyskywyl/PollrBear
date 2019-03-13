import { combineReducers } from 'redux';
import { CLOSE_MODAL } from '../actions/modal_actions';

import modal from './modal_reducer';

const uiReducer = (state = null, action) => {
  switch (action.type) {
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default combineReducers({
  uiReducer,
  modal
});