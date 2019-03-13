import * as GroupAPI from "../util/group_api_util";
import * as QuestionAPI from "../util/question_api_util";
import { removeQuestion, updateQuestion, updateQuestionGroup } from "../actions/questions";
import { receiveErrors } from "./error_actions";
import { receiveQuestion } from "./questions";

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

export const deleteGroup = group => dispatch => (
  GroupAPI.deleteGroup(group.id).then(() => {
    if (group.questions) {
      Object.values(group.questions).forEach(question => {
        dispatch(removeQuestion(question))
      });
    }
    dispatch(removeGroup(group.id))
  })
);

export const createRegroup = (group, questionIds) => dispatch => (
  GroupAPI.createGroup(group, questionIds).then(group => {
    var i = 0;
    questionIds.forEach((questionId) => {
      QuestionAPI.changeQuestionGroup(questionId, group.id).then(data => {
        dispatch(receiveQuestion(data))
        i++;
        if (i === questionIds.length) {
          dispatch(fetchGroups())
        }
      })
      })
    // )})
  }, err => (dispatch(receiveErrors(err.responseJSON)))
  )
);
export const updateUngroup = (group, questionIds) => dispatch => {
    var i = 0;
    questionIds.forEach((questionId) => {
      QuestionAPI.changeQuestionGroup(questionId, group.id).then(data => {
        dispatch(receiveQuestion(data))
        i++;
        if (i === questionIds.length) {
          dispatch(fetchGroups())
        }
      })
      })
    // )})
    };
