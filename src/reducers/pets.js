import { v4 as uuidv4 } from 'uuid';
import { ADD_PETS, DELETE_PETS, OPEN_MODAL, CHANGE_VALUE, SAVE_PETS } from '../actions';

const initialState = {
  petsList: [],
  name: '',
  age: '',
  species: '',
  breed: '',
  open: false,
};

const petReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PETS:
      return {
        ...state,
        petsList: action.pets,
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
      };
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default petReducer;
