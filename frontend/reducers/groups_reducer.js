import {
  RECEIVE_ALL_GROUPS,
  RECEIVE_GROUP,
  REMOVE_GROUP,
} from '../actions/groups';
import { RECEIVE_QUESTION } from '../actions/questions';
import merge from 'lodash/merge';

const GroupsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
      return merge({}, action.groups);
    case RECEIVE_GROUP:
      return merge({}, action.group);
    case REMOVE_GROUP:
      let newState = merge({}, oldState);
      delete newState[action.groupId];
      return newState;
    case RECEIVE_QUESTION:
      return merge({}, oldState, action.data.groups);
    default:
      return oldState;
  }
};

export default GroupsReducer;