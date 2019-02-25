import * as GroupAPI from "../util/group_api_util";
import { removeQuestion, updateQuestion } from "../actions/questions";
import { receiveErrors } from "./error_actions";

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

export const receiveUngroupedId = (id) => ({
  type: RECEIVE_UNGROUPED_ID,
  id
})

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

export const deleteGroup = group => dispatch => (
  GroupAPI.deleteGroup(group.id).then(() => {
    Object.values(group.questions).forEach(question => {
      dispatch(removeQuestion(question))
    });
    dispatch(removeGroup(group.id))
  })
);

export const createRegroup = (group, questions) => dispatch => (
  GroupAPI.createGroup(group).then(gorup => {
    dispatch(receiveGroup(group))

    questions.forEach((question) => {
      question['group_id'] = group.id
      dispatch(updateQuestion(question))
    })
  }, err => (dispatch(receiveErrors(err.responseJSON))
  ).then(
    dispatch(fetchGroups())
  ))
);

