import * as ChoiceAPI from "../util/choice_api_util";


export const RECEIVE_CHOICE = "RECEIVE_CHOICE";
export const REMOVE_CHOICE = "REMOVE_CHOICE";

const receiveChoice = (choice) => ({
  type: RECEIVE_CHOICE,
  choice
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