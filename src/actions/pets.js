// ACTION TYPES
export const GET_PETSLIST = 'GET_PETSLIST';
export const SAVE_PETSLIST = 'SAVE_PETSLIST';
export const SAVE_CURRENT_PET = 'SAVE_CURRENT_PET';
export const ADD_PET = 'ADD_PET';
export const UPDATE_PET = 'UPDATE_PET';
export const CHANGE_FILE = 'CHANGE_FILE';
export const CHANGE_URL = 'CHANGE_URL';
export const SAVE_PET_TO_DELETE = 'SAVE_PET_TO_DELETE';
export const DELETE_PET = 'DELETE_PET';
export const DELETE_PET_ON_SCREEN = 'DELETE_PET_ON_SCREEN';
export const GET_EVENTSLIST_BY_PET = 'GET_EVENTSLIST_BY_PET';

export const CLEAR_NEW_PET = 'CLEAR_NEW_PET';
export const FINISH_LOADING = 'FINISH_LOADING';

// ACTION CREATOR

export const getPetsList = () => ({
  type: GET_PETSLIST,
});

export const getEventsListByPet = (petId) => ({
    type: GET_EVENTSLIST_BY_PET,
    petId
  });

export const savePetsList = (petsList) => ({
  type: SAVE_PETSLIST,
  petsList,
});

export const saveCurrentPet = (currentPet) => ({
  type: SAVE_CURRENT_PET,
  currentPet,
});

export const addPet = (pet) => ({
  type: ADD_PET,
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

export const savePetToDelete = (id) => ({
    type: SAVE_PET_TO_DELETE,
    id,
  });

export const deletePet = () => ({
  type: DELETE_PET,
});

export const deletePetOnScreen = (id) => ({
    type: DELETE_PET_ON_SCREEN,
    id,
  });

export const finishLoading = () => ({
  type: FINISH_LOADING,
});
