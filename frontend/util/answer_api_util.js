export const fetchAnswers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/answers'
  });
};

export const createAnswer = (answer) => {
  return $.ajax({
    method: 'POST',
    url: 'api/answers',
    data: answer
  });
};

export const updateAnswer = (answer) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/answers/${answer.id}`,
    data: answer
  });
};

export const deleteAnswer = (choice_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/answers/0`,
    data: {choice_id}
  });
};

