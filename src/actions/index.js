// ACTION TYPES
export const GET_PETS_LIST = 'GET_PETS_LIST';
export const SAVE_PETS_LIST = 'SAVE_PETS_LIST';
export const ADD_PETS = 'ADD_PETS';
export const DELETE_PETS = 'DELETE_PETS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CLEAR_NEW_PET = 'CLEAR_NEW_PET';

// ACTION CREATOR

export const getPetsList = () => ({
  type: GET_PETS_LIST,
});

export const savePetsList = (petsList) => ({
  type: SAVE_PETS_LIST,
  petsList,
});

export const addPets = () => ({
  type: ADD_PETS,
});

export const clearNewPet = () => ({
  type: CLEAR_NEW_PET,
});

export const deletePets = (id) => ({
  type: DELETE_PETS,
  id,
});

export const openModal = () => ({
  type: OPEN_MODAL,
});

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});
