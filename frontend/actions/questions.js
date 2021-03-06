import * as QuestionAPI from "../util/question_api_util";
import * as ChoiceAPI from "../util/choice_api_util";
import { receiveErrors } from './error_actions';


export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_NEW_QUESTION = 'RECEIVE_NEW_QUESTION';
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const CLEAR_QUESTION = "CLEAR_QUESTION";

export const receiveAllQuestions = questions => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
});

export const receiveQuestion = data => ({
  type: RECEIVE_QUESTION,
  data
});

const receiveNewQuestion = ({question}) => ({
  type: RECEIVE_NEW_QUESTION,
  question
});

export const removeQuestion = question => ({
  type: REMOVE_QUESTION,
  question
});

export const clearQuestion = () => ({
  type: CLEAR_QUESTION
});

export const fetchQuestions = () => dispatch => {
  return (
    QuestionAPI.fetchQuestions().then(questions => {
      return (dispatch(receiveAllQuestions(questions)))
    })
  )
};

export const fetchQuestion = (questionId) => dispatch => {
  return(
    QuestionAPI.fetchQuestion(questionId).then(question => {
      return (dispatch(receiveQuestion(question)))
    })
  )
}


export const createQuestion = (question, choices) => dispatch => {
  let hasChoices = false;
  for (let key in choices) {
      if (choices[key].body !== null && choices[key].body !== "") {
        hasChoices = true;
        break;
      }
  } 
  if (!hasChoices) {
    return;
  }
  return QuestionAPI.createQuestion(question)
    .then(question => {
      ChoiceAPI.createChoice(choices, question.question.id)
      return dispatch(receiveNewQuestion(question))
    }, err => (dispatch(receiveErrors(err.responseJSON))))
};

export const updateQuestion = (question, choices) => dispatch => (
  QuestionAPI.updateQuestion(question)
    .then(question => (saveChoices(choices, question)
    ), err => (dispatch(receiveErrors(err.responseJSON))))
    .then(question => {
      window.location.href = `/#/groups`;
      return dispatch(receiveNewQuestion(question));
      } 
    ), err => (dispatch(receiveErrors(err.responseJSON))
  )
);

const saveChoices = (choices, question) => {
  if (choices.length === 0){
    return;
  }
  if (choices.length === 1) {
    if (choices[0].question_id === 0 ) {
      return ChoiceAPI.createChoice(choices, question.question.id)
    }
    return ChoiceAPI.updateChoice(choices[0], question.question.id)
  }
  if (choices[0].question_id === 0) {
    return ChoiceAPI.createChoice(choices, question.question.id)
  } else {
    return ChoiceAPI.updateChoice(choices[0], question.question.id).then(() => saveChoices(choices.slice(1), question))
  }
}

export const activeQuestion = (question) => dispatch => (
  QuestionAPI.updateQuestion(question).then(question => dispatch(receiveQuestion(question)))
);

export const deleteQuestion = (questionId) => dispatch => (
  QuestionAPI.deleteQuestion(questionId).then(questionId => dispatch(removeQuestion(questionId)))
);

export const updateQuestionGroup = (question) => {
  return dispatch => {
    QuestionAPI.updateQuestion(question)
    .then(question => {
      window.location.href = `/#/groups`;
      return dispatch(receiveQuestion(question));
    }
    ), err => (dispatch(receiveErrors(err.responseJSON)))
  }
};

