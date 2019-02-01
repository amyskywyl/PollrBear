import * as QuestionAPI from "../util/question_api_util";
import * as ChoiceAPI from "../util/choice_api_util";

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_NEW_QUESTION = 'RECEIVE_NEW_QUESTION';
export const REMOVE_QUESTION = "REMOVE_QUESTION";

export const receiveAllQuestions = questions => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
});

const receiveQuestion = data => ({
  type: RECEIVE_QUESTION,
  data
});

const receiveNewQuestion = ({question}) => ({
  type: RECEIVE_NEW_QUESTION,
  question
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
  return(
    QuestionAPI.fetchQuestion(questionId).then(question => {
      return (dispatch(receiveQuestion(question)))
    })
  )
}


export const createQuestion = (question, choices) => dispatch => {
  return (QuestionAPI.createQuestion(question)
    .then(question => {
      (ChoiceAPI.createChoice(choices[0], question.question.id))
      .then(() => {
        ChoiceAPI.createChoice(choices[1], question.question.id).then(() => {
          return dispatch(receiveNewQuestion(question))
        }
      )
    })})
  )
}

export const updateQuestion = (question, choices) => dispatch => {
  return (QuestionAPI.updateQuestion(question)
    .then(question => {
      (ChoiceAPI.updateChoice(choices[0], question.question.id))
      .then(() => {
        ChoiceAPI.updateChoice(choices[1], question.question.id).then(() => {
          return dispatch(receiveQuestion(question))
        })
      })
    })
  )
};

export const deleteQuestion = (questionId) => dispatch => (
  QuestionAPI.deleteQuestion(questionId).then(questionId => dispatch(removeQuestion(questionId)))
);
