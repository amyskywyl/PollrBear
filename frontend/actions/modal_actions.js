export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CLEAR_MODAL = 'CLEAR_MODAL';

export const openModal = (questionIds) => {
  return {
    type: OPEN_MODAL,
    questionIds
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const clearModal = () => {
  return {
    type: CLEAR_MODAL
  };
};