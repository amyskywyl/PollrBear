export const RECEIVE_ACTIVE = "RECEIVE_ACTIVE";
export const CLEAR_ACTIVE = "CLEAR_ACTIVE";
import { receiveErrors } from "./error_actions";
import * as ActiveAPI from '../util/active_api_util';
import { fetchQuestion } from "./questions";

export const receiveActive = active => ({
  type: RECEIVE_ACTIVE,
  active
});

export const clearActive = () => ({
  type: CLEAR_ACTIVE,
})

export const updateActive = questionId => dispatch => (
  ActiveAPI.updateActive(questionId).then(
    question => dispatch(receiveActive(question)),
    err => dispatch(receiveErrors(err.responseJSON)))
    .then(()=> dispatch(fetchQuestion(questionId)))
);

export const fetchActive = user => dispatch => {
  return ActiveAPI.fetchActive(user).then(active => {
    dispatch(receiveActive(active))
  }), err => (dispatch(receiveErrors(err.responseJSON)))
}