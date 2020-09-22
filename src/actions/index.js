// ACTION TYPES
export const FETCH_PETS = 'FETCH_PETS';
export const SAVE_PETS = 'SAVE_PETS';
export const ADD_PETS = 'ADD_PETS';
export const DELETE_PETS = 'DELETE_PETS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CHANGE_VALUE = 'CHANGE_VALUE';

// ACTION CREATOR

export const fetchPets = () => ({
  type: FETCH_PETS,
});

export const savePets = (pets) => ({
  type: SAVE_PETS,
  pets,
});

export const deletePets = (id) => ({
  type: DELETE_PETS,
  id,
});

export const openModal = () => ({
  type: OPEN_MODAL,
});

export const changeValue = (key, value) => ({
  type: CHANGE_VALUE,
  key,
  value,
});
