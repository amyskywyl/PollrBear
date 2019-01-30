export const getGroupQuestions = (questions, groupId) => {
  return Object.values(questions).filter(question => question.group_id === parseInt(groupId));
}