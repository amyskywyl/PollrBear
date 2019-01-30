import * as QuestionAPI from "../util/question_api_util";

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const TOGGLE_ACTIVE = "TOGGLE_ACTIVE";

export const receiveAllQuestions = questions => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
});

const receiveQuestion = entities => ({
  type: RECEIVE_QUESTION,
  entities
});

const removeQuestion = question => ({
  type: REMOVE_QUESTION,
  question
});

export const fetchQuestions = () => dispatch => {
  return (
    QuestionAPI.fetchQuestions().then(questions => {
      return (dispatch(receiveAllQuestions(questions)))
    })
  )
};

export const fetchQuestion = (questionId) => dispatch => {
  debugger
  return(
    QuestionAPI.fetchQuestion(questionId).then(question => {
      return (dispatch(receiveQuestion(question)))
    })
  )
}


export const createQuestion = (question) => dispatch => (
  QuestionAPI.createQuestion(question).then(question => dispatch(receiveQuestion(question)))
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