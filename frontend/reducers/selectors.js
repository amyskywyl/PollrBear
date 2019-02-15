export const allObjects = (objects) => {
  return Object.keys(objects).map(id => objects[id]);
};

export const answerCount = choices => {
  let count = 0;
  allObjects(choices).forEach((choice) => {
    count += choice.answer_count;
  });
  return count;
};