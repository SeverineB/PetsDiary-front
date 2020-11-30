import {
  DELETE_PETS,
  OPEN_MODAL_LOGIN,
  GET_PETSLIST,
  SAVE_PETSLIST,
  SAVE_CURRENT_PET,
  CHANGE_FIELD,
  CHANGE_FILE,
  CHANGE_URL,
  ADD_PETS,
  UPDATE_PET,
  CLEAR_NEW_PET,
} from '../actions';

const initialState = {
  petsList: [],
  currentPet: {},
  id: null,
  name: '',
  age: '',
  species: '',
  breed: '',
  avatar: {},
  avatarUrl: '',
  open: false,
  isPetsLoading: false,
  errorOnField: false,
  userId: '',
};

const petReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PETSLIST:
      return {
        ...state,
      };
    case SAVE_PETSLIST:
      return {
        ...state,
        petsList: action.petsList,
      };
    case SAVE_CURRENT_PET:
      return {
        ...state,
        currentPet: action.currentPet,
      };
    case ADD_PETS:
      return {
        ...state,
      };
    case UPDATE_PET:
      return {
        ...state,
      };
    case CLEAR_NEW_PET:
      return {
        ...state,
        name: '',
        age: '',
        species: '',
        breed: '',
        open: false,
        avatarUrl: '',
      };
    case DELETE_PETS:
      return {
        ...state,
        petsList: state.petsList.filter((pet) => pet.id !== action.id),
      };
    case OPEN_MODAL_LOGIN:
      return {
        ...state,
        openLogin: !state.openLogin,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_FILE:
      return {
        ...state,
        avatar: action.avatar,
      };
    case CHANGE_URL:
      return {
        ...state,
        avatarUrl: action.avatarUrl,
      };
    default:
      return state;
  }
};

export default petReducer;
