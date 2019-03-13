import { OPEN_MODAL, CLOSE_MODAL, CLEAR_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.questionIds;
    case CLOSE_MODAL:
      return null;
    case CLEAR_MODAL:
      return {};
    default:
      return state;
  }
}