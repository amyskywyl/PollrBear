export const fetchGroups = () => {
  return $.ajax({
    method: "GET",
    url: "/api/groups",
  });
};

export const fetchGroup = (groupId) => {
  return $.ajax({
    method: "GET",
    url: `/api/groups/${groupId}`,
  });
};
export const createGroup = (group, questions) => {
  return $.ajax({
    method: "POST",
    url: "/api/groups",
    data: { group, questions }
  });
};
export const updateGroup = (group) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/groups/${group.id}`,
    data: { group }
  });
};
export const deleteGroup = (groupId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/groups/${groupId}`,
  });
};