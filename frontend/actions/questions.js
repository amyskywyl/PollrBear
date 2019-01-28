import * as QuestionAPI from "../util/question_api_util";

export const RECEIVE_NEW_QUESTION = "RECEIVE_NEW_QUESTION";
export const RECEIVE_UPDATED_QUESTION = "RECEIVE_UPDATED_QUESTION";
export const RECEIVE_UPDATED_ORDER = "RECEIVE_UPDATED_ORDER";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

export const receiveQuestion = ({ groups, questions }) => {
  return {
    type: RECEIVE_NEW_QUESTION,
    groups,
    questions,
  };
};

export const receiveUpdatedQuestion = ({ group, question }) => {
  return {
    type: RECEIVE_UPDATED_QUESTION,
    group,
    question,
  };
};

export const receiveUpdatedOrder = (payload) => {
  return {
    type: RECEIVE_UPDATED_ORDER,
    payload,
  };
};

export const removeQuestion = ({ group, question }) => {
  return {
    type: REMOVE_QUESTION,
    group,
    question,
  };
};

export const createQuestion = (question) => dispatch => {
  return QuestionAPI.createQuestion(question).then(
    payload => dispatch(receiveQuestion(payload))
  );
};

export const updateQuestion = (question) => dispatch => {
  return QuestionAPI.updateQuestion(question).then(
    payload => dispatch(receiveUpdatedQuestion(payload))
  );
};

export const updateQuestionOrder = (orderInfo) => dispatch => {
  return QuestionAPI.updateQuestionOrder(orderInfo).then(
    payload => dispatch(receiveUpdatedOrder(payload))
  );
};

export const deleteQuestion = (id) => dispatch => {
  return QuestionAPI.deleteQuestion(id).then(
    payload => dispatch(removeQuestion(payload))
  );
};