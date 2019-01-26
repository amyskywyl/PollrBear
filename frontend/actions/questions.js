import * as QuestionAPI from "../util/question_api_util";

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = "REMOVE_QUESTION";

export const receiveAllQuestions = questions => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
});

const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

const removeQuestion = questionId => ({
  type: REMOVE_QUESTION,
  questionId
});

export const fetchQuestions = (groupId) => dispatch => {
  return (
    QuestionAPI.fetchQuestions(groupId).then(questions => {
      return (dispatch(receiveAllQuestions(questions)))
    })
  )
};

export const fetchQuestion = (questionId, groupId) => dispatch => (
  QuestionAPI.fetchQuestion(questionId, groupId).then(question => dispatch(receiveQuestion(question)))
);

export const createQuestion = (question, groupId) => dispatch => (
  QuestionAPI.createQurstion(question, groupId).then(question => dispatch(receiveGroup(question)))
);

export const updateQuestion = (question, groupId) => dispatch => (
  QuestionAPI.updateQuestion(question, groupId)
    .then(question => dispatch(receiveQuestion(question)))
);

export const deleteQuestion = (questionId, groupId) => dispatch => (
  QuestionAPI.deleteQuestion(questionId, groupId).then(questionId => dispatch(removeQuestion(questionId)))
);