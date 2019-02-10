export const createChoice = (body, questionId) => {
  return $.ajax({
    method: 'POST',
    url: 'api/choices',
    data: { choice: {body, questionId} }
  });
}

export const updateChoice = (choice, questionId) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/choices/${choice.id}`,
    data: { choice }
  });
};

export const deleteChoice = (choiceId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/choices/${choiceId}`,
  })
}

export const fetchChoice = choiceId => {
  return $.ajax({
    method: 'GET',
    url: `api/choice/${choiceId}`,
    data: { choiceId }
  })
}

export const fetchChoices = (question_id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/choices',
    data: {question_id}
  });
};