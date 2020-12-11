// ACTION TYPES
export const GET_PETSLIST = 'GET_PETSLIST';
export const SAVE_PETSLIST = 'SAVE_PETSLIST';
export const SAVE_CURRENT_PET = 'SAVE_CURRENT_PET';
export const SAVE_CURRENT_WEIGHT = 'SAVE_CURRENT_WEIGHT';
export const ADD_PET = 'ADD_PET';
export const SEND_PET = 'SEND_PET';
export const UPDATE_PET = 'UPDATE_PET';
export const CHANGE_FILE = 'CHANGE_FILE';
export const CHANGE_URL = 'CHANGE_URL';
export const DELETE_PET = 'DELETE_PET';
export const DELETE_WEIGHT = 'DELETE_WEIGHT';
export const REMOVE_WEIGHT = 'REMOVE_WEIGHT';

export const CLEAR_NEW_PET = 'CLEAR_NEW_PET';
export const FINISH_LOADING = 'FINISH_LOADING';

// ACTION CREATOR

export const getPetsList = () => ({
  type: GET_PETSLIST,
});

export const savePetsList = (petsList) => ({
  type: SAVE_PETSLIST,
  petsList,
});

export const saveCurrentPet = (currentPet) => ({
  type: SAVE_CURRENT_PET,
  currentPet,
});

export const saveCurrentWeight = (currentWeight) => ({
  type: SAVE_CURRENT_WEIGHT,
  currentWeight,
});

export const addPet = (pet) => ({
  type: ADD_PET,
  pet
});

export const sendPet = (pet) => ({
    type: SEND_PET,
    pet
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

export const deletePet = (id) => ({
  type: DELETE_PET,
  id,
});

export const deleteWeight = (id) => ({
  type: DELETE_WEIGHT,
  id,
});

export const removeWeight = (id) => ({
  type: REMOVE_WEIGHT,
  id,
});

export const finishLoading = () => ({
  type: FINISH_LOADING,
});
