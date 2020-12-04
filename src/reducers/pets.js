import {
  DELETE_PETS,
  OPEN_MODAL_LOGIN,
  GET_PETSLIST,
  SAVE_PETSLIST,
  SAVE_CURRENT_PET,
  CHANGE_FIELD,
  CHANGE_FILE,
  CHANGE_URL,
  CHANGE_EDIT_FIELD,
  CHANGE_EDIT_ARRAY_FIELD,
  ADD_PETS,
  UPDATE_PET,
  UPDATE_PET_DETAILS,
  CLEAR_NEW_PET,
  FINISH_LOADING,
} from '../actions';

const initialState = {
  petsList: [],
  currentPet: {
    _id: null,
    name: '',
    age: '',
    species: '',
    breed: '',
    sex: '',
    birthdate: '',
    ide: '',
    avatar: {},
    avatarUrl: '',
    open: false,
    isPetsLoading: true,
    errorOnField: false,
    userId: '',
    /* pet_details: {
      ide: '',
      birthdate: '',
      weight: [{
        date: '',
        value: null,
      }],
    }, */
  },
  //! find a solution to delete this part of state
  id: null,
  name: '',
  age: '',
  species: '',
  breed: '',
  sex: 'mâle',
  birthdate: '',
  ide: '',
  avatar: {},
  avatarUrl: '',
  open: false,
  isPetsLoading: false,
  isPetsLoaded: false,
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
        isPetsLoaded: true,
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
    case UPDATE_PET_DETAILS:
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
    case CHANGE_EDIT_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_EDIT_ARRAY_FIELD:
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
    case FINISH_LOADING:
      return {
        ...state,
        isPetsLoading: false,
      };
    default:
      return state;
  }
};

export default petReducer;
