export const fetchActive = username => {
  return $.ajax({
    method: 'GET',
    url: 'api/active_polls/',
    data: { username: username }
  });
};

export const updateActive = question_id => {
  return $.ajax({
    method: 'PATCH',
    url: `api/active_polls/${question_id}`,
    data: { active_polls: question_id }
  });
};