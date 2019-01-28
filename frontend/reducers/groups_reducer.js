import { RECEIVE_NEW_GROUP, REMOVE_GROUP, UPDATE_ORDER_FRONT_END } from '../actions/groups';
import { RECEIVE_NEW_QUESTION, RECEIVE_UPDATED_ORDER, REMOVE_QUESTION } from '../actions/questions';

import { merge } from 'lodash';

const groupsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_NEW_GROUP:
    case RECEIVE_NEW_QUESTION:
      return merge(newState, action.groups);

    case RECEIVE_UPDATED_ORDER:
      const groups = action.payload.groups;
      Object.keys(groups).forEach(groupIdx => {
        newState[parseInt(groupIdx)].question_ids = groups[parseInt(groupIdx)].group_ids;
      });
      return newState;

    case UPDATE_ORDER_FRONT_END:
      let payload = action.payload;
      let sourceGroup = newState[payload.question.group_id];
      let futureGroup = newState[payload.future_group];
      newState[sourceGroup.id].question_ids = sourceGroup.question_ids;
      newState[futureGroup.id].question_ids = futureGroup.question_ids;
      return newState;

    case REMOVE_QUESTION:
      newState[Object.keys(action.group)[0]] = Object.values(action.group)[0];
      return newState;

    case REMOVE_GROUP:
      delete newState[action.group.id];
      return newState;

    default:
      return state;
  }
};

export default groupsReducer;