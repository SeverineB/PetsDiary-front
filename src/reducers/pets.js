import {
  DELETE_PETS,
  OPEN_MODAL,
  GET_PETS_LIST,
  SAVE_PETS_LIST,
  CHANGE_FIELD,
  ADD_PETS,
  CLEAR_NEW_PET,
} from '../actions';

const initialState = {
  petsList: [],
  id: null,
  name: '',
  age: '',
  species: '',
  breed: '',
  open: false,
  isPetsLoading: false,
  errorOnField: false,
};

const petReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PETS_LIST:
      return {
        ...state,
        isPetsLoading: !state.isPetsLoading,
      };
    case SAVE_PETS_LIST:
      return {
        ...state,
        isPetsLoading: !state.isPetsLoading,
        petsList: action.petsList,
      };
    case ADD_PETS:
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
      };
    case DELETE_PETS:
      return {
        ...state,
        petsList: state.petsList.filter((pet) => pet.id !== action.id),
      };
    case OPEN_MODAL:
      return {
        ...state,
        open: !state.open,
        dimmer: action.dimmer,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default petReducer;
