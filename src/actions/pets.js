// ACTION TYPES
export const GET_PETSLIST = 'GET_PETS_LIST';
export const SAVE_PETSLIST = 'SAVE_PETS_LIST';
export const ADD_PETS = 'ADD_PETS';
export const DELETE_PETS = 'DELETE_PETS';
export const OPEN_MODAL_LOGIN = 'OPEN_MODAL_LOGIN';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLEAR_NEW_PET = 'CLEAR_NEW_PET';

// ACTION CREATOR

export const getPetsList = () => ({
  type: GET_PETSLIST,
});

export const savePetsList = (petsList) => ({
  type: SAVE_PETSLIST,
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

export const openModalLogin = () => ({
  type: OPEN_MODAL_LOGIN,
});
