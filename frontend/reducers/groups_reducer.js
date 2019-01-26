import {
  RECEIVE_ALL_GROUPS,
  RECEIVE_GROUP,
  REMOVE_GROUP,
} from '../actions/groups';
import merge from 'lodash/merge';

const GroupsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
    debugger
      return merge({}, action.groups);
    case RECEIVE_GROUP:
      return merge({}, action.group);
    case REMOVE_GROUP:
      let newState = merge({}, oldState);
      delete newState[action.groupId];
      return newState;
    default:
      return oldState;
  }
};

export default GroupsReducer;