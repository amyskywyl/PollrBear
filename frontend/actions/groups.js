import * as GroupAPI from "../util/group_api_util";

export const RECEIVE_ALL_GROUPS = 'RECEIVE_ALL_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const REMOVE_GROUP = "REMOVE_GROUP";

export const receiveAllGroups = groups => ({
  type: RECEIVE_ALL_GROUPS,
  groups
});

const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
});

const removeGroup = groupId => ({
  type: REMOVE_GROUP,
  groupId
});

export const fetchGroups = () => dispatch => {
  return (
  GroupAPI.fetchGroups().then(groups => {
    return (dispatch(receiveAllGroups(groups)))})
)};

export const fetchGroup = groupId => dispatch => (
  GroupAPI.fetchGroup(groupId).then(group => dispatch(receiveGroup(group)))
);

export const createGroup = group => dispatch => (
  GroupAPI.createGroup(group).then(group => dispatch(receiveGroup(group)))
);

export const updateGroup = group => dispatch => (
  GroupAPI.updateGroup(group)
    .then(group => dispatch(receiveGroup(group)))
);

export const deleteGroup = groupId => dispatch => (
  GroupAPI.deleteGroup(groupId).then(group => dispatch(removeGroup(groupId)))
);

