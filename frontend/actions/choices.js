import * as ChoiceAPI from "../util/choice_api_util";
import { receiveErrors } from "./session_actions";


export const RECEIVE_CHOICE = "RECEIVE_CHOICE";
export const REMOVE_CHOICE = "REMOVE_CHOICE";
export const RECEIVE_CHOICES = "RECEIVE_CHOICES";

const receiveChoice = (choice) => ({
  type: RECEIVE_CHOICE,
  choice
})

const receiveChoices = choices => ({  
  type: RECEIVE_CHOICES,
  choices
})

const removeChoice = choice => ({
  type: REMOVE_CHOICE,
  choice
})

export const createChoice = (choice_params) => dispatch => {
  return (
    ChoiceAPI.createChoice(choice_params).then(choice => {
      return (dispatch(receiveChoice(choice)))
    })
  )
}

export const updateChoice = (choice_params) => dispatch => {
  return (
    ChoiceAPI.updateChoice(choice_params).then(choice => {
      return (dispatch(receiveChoice(choice)))
    })
  )
}

export const deleteChoice = (choiceId) => dispatch => (
  ChoiceAPI.deleteChoice(choiceId).then(choiceId => dispatch(removeChoice(choiceId)))
);

export const fetchChoices = (question_id) => dispatch => (
  ChoiceAPI.fetchChoices(question_id).then(choices => dispatch(receiveChoices(choices))),
  err => (dispatch(receiveErrors(err.responseJSON)))
);