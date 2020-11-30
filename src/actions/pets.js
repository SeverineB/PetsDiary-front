// ACTION TYPES
export const GET_PETSLIST = 'GET_PETSLIST';
export const SAVE_PETSLIST = 'SAVE_PETSLIST';
export const GET_PET_DETAILS_BY_PET_ID = 'GET_PET_DETAILS_BY_PET_ID';
export const SAVE_PET_DETAILS = 'SAVE_PET_DETAILS';
export const SAVE_CURRENT_PET = 'SAVE_CURRENT_PET';
export const ADD_PETS = 'ADD_PETS';
export const UPDATE_PET = 'UPDATE_PET';
export const CHANGE_FILE = 'CHANGE_FILE';
export const CHANGE_URL = 'CHANGE_URL';
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

export const getPetDetailsByPetId = () => ({
  type: GET_PET_DETAILS_BY_PET_ID,
});

export const savePetDetails = (petDetails) => ({
  type: SAVE_PET_DETAILS,
  petDetails,
});

export const saveCurrentPet = (currentPet) => ({
  type: SAVE_CURRENT_PET,
  currentPet,
});

export const addPets = () => ({
  type: ADD_PETS,
});

export const updatePet = () => ({
  type: UPDATE_PET,
});

export const changeFile = (avatar) => ({
  type: CHANGE_FILE,
  avatar,
});

export const changeUrl = (avatarUrl) => ({
  type: CHANGE_URL,
  avatarUrl,
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
