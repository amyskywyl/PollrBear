import * as QuestionAPI from "../util/question_api_util";
import { values } from 'lodash';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const UPDATE_QUESTION = "UPDATE_GROUP";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

export const receiveAllQuestions = questions => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
});

const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

const updateQuestion = question => {
  if (values(question).length === 0) {
    return {
      type: "IGNORE",
      question: {},
    };
  }
  return {
    type: UPDATE_QUESTION,
    question
  }
}

const removeQuestion = questionId => ({
  type: REMOVE_QUESTION,
  questionId
});

export const fetchQuestions = () => dispatch => {
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
  QuestionAPI.createQurstion(question).then(question => dispatch(receiveGroup(question)))
);

export const updateQuestion = (question, groupId) => dispatch => (
  QuestionAPI.updateQuestion(question, groupId)
    .then(question => dispatch(receiveQuestion(question)))
);

export const deleteQuestion = (questionId, groupId) => dispatch => (
  QuestionAPI.deleteQuestion(questionId, groupId).then(questionId => dispatch(removeQuestion(questionId)))
);