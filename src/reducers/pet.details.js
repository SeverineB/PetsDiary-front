import {
  CHANGE_EDIT_FIELD,
  CHANGE_EDIT_ARRAY_FIELD,
  UPDATE_PET_DETAILS,
  CLEAR_NEW_PET,
  SAVE_CURRENT_PET_DETAILS
} from '../actions';

const initialState = {
  pet_details: {
    pet_id: '',
    ide: '',
    birthdate: '',
    weight: [
      {
        date: '',
        value: null,
      },
    ],
    vaccine: [
      {
        date: '',
        name: '',
      },
    ],
    deworming: [
      {
        date: '',
        name: '',
      },
    ],
    antiflea: [
      {
        date: '',
        name: '',
      },
    ],
  },
};


const petDetailsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_PET_DETAILS:
      return {
        ...state,
      };
    case SAVE_CURRENT_PET_DETAILS:
      return {
        ...state,
        pet_details: action.petDetails,
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
    case CHANGE_EDIT_FIELD: {
      console.log('ACTION NAME VAUT', action.name);
      console.log('ACTION VALUE VAUT', action.value);
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case CHANGE_EDIT_ARRAY_FIELD: {
     /*  const index = state.pet_details.weight.findIndex((detail) => detail === action.value);
      console.log('INDEX IN REDUCER', state.pet_details.weight.findIndex((detail) => detail === action.value)); */
      const newWeightItem = [...state.weight];
      newWeightItem[action.name].value = action.value;
      console.log('NEW WEIGHT ITEM INDEX', newWeightItem[action.name].value);
      return {
        ...state,
       
      };
    }
    default:
      return state;
  }
};

export default petDetailsReducer;
