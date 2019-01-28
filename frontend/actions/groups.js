import * as GroupAPI from "../util/group_api_util";

// export const RECEIVE_ALL_GROUPS = 'RECEIVE_ALL_GROUPS';
export const RECEIVE_NRE_GROUP = 'RECEIVE_NRE_GROUP';
export const REMOVE_GROUP = "REMOVE_GROUP";
export const UPDATE_ORDER_FRONT_END = "UPDATE_ORDER_FRONT_END";

// export const receiveAllGroups = groups => ({
//   type: RECEIVE_ALL_GROUPS,
//   groups
// });

const receiveGroup = ({ groups, questions }) => ({
  type: RECEIVE_NRE_GROUP,
  groups,
  questions
});

const removeGroup = ({ group }) => ({
  type: REMOVE_GROUP,
  group
});

export const updateOrderFrontEnd = (payload) => {
  return {
    type: UPDATE_ORDER_FRONT_END,
    payload,
  };
};

export const fetchGroups = () => dispatch => {
  return (
  GroupAPI.fetchGroups().then(groups => {
    return (dispatch(receiveAllGroups(groups)))})
)};

export const fetchGroup = groupId => dispatch => (
  GroupAPI.fetchGroup(groupId).then(group => dispatch(receiveGroup(group)))
);

export const createGroup = group => dispatch => (
  GroupAPI.createGroup(group).then(payload => dispatch(receiveGroup(payload)))
);

export const updateGroup = group => dispatch => (
  GroupAPI.updateGroup(group)
    .then(payload => dispatch(receiveGroup(payload)))
);

export const deleteGroup = groupId => dispatch => (
  GroupAPI.deleteGroup(groupId).then(payload => dispatch(removeGroup(payload)))
);

