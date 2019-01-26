export const fetchQuestions = (groupId) => {
  return $.ajax({
    method: "GET",
    url: `/api/groups/${groupId}/questions`,
  });
};

export const fetchQuestion = (questionId, groupId ) => {
  return $.ajax({
    method: "GET",
    url: `/api/groups/${groupId}/questions/${questionId}`,
    data: { 
      question_id: questionId,
      group_id: groupId
    }
  });
};
export const createQuestion = (question, groupId) => {
  return $.ajax({
    method: "POST",
    url: `/api/groups/${groupId}/questions`,
    data: { question }
  });
};
export const updateQuestion = (question, groupId) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/groups/${groupId}/questions/${question.id}`,
    data: { question }
  });
};
export const deleteQuestion = (questionId, groupId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/groups/${groupId}/questions/${questionId}`,
  });
};