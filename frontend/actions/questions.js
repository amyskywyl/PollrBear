import * as QuestionAPI from "../util/question_api_util";

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const TOGGLE_ACTIVE = "TOGGLE_ACTIVE";

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

export const fetchQuestions = () => dispatch => {
  debugger
  return (
    QuestionAPI.fetchQuestions().then(questions => {
      return (dispatch(receiveAllQuestions(questions)))
    })
  )
};

export const fetchQuestion = (questionId) => dispatch => (
  QuestionAPI.fetchQuestion(questionId).then(question => dispatch(receiveQuestion(question)))
);

export const createQuestion = (question) => dispatch => (
  QuestionAPI.createQuestion(question).then(question => dispatch(receiveGroup(question)))
);

export const updateQuestion = (question) => dispatch => (
  QuestionAPI.updateQuestion(question)
    .then(question => dispatch(receiveQuestion(question)))
);

export const deleteQuestion = (questionId) => dispatch => (
  QuestionAPI.deleteQuestion(questionId).then(questionId => dispatch(removeQuestion(questionId)))
);

export const toggleActive = (id) => ({
  type: TOGGLE_ACTIVE,
  id
})