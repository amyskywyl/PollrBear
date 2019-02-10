import * as AnswerAPI from '../util/answer_api_util';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const CLEAR_ANSWER = 'CLEAR_ANSWER';
import { receiveErrors } from './error_actions';

export const receiveAnswer = (answer) => ({
  type: RECEIVE_ANSWER,
  answer
});

export const clearAnswer = (answer) => ({
  type: CLEAR_ANSWER,
  answer
});

export const createAnswer = (answer_params) => dispatch => {
  return (
    AnswerAPI.createAnswer(answer_params).then(answer => {
      return (dispatch(receiveAnswer(answer)))
    }, err => (dispatch(receiveErrors(err.responseJSON))))
  )
};

export const deleteAnswer = (choice_id) => dispatch => {
  return (
    AnswerAPI.deleteAnswer(choice_id).then(answer => {
      return (dispatch(clearAnswer(answer)))
    }, err => (dispatch(receiveErrors(err.responseJSON))))
  )
};

