import {
    GET_PETSLIST,
    SAVE_PETSLIST,
    CHANGE_FIELD,
    CHANGE_EDIT_FIELD,
    CHANGE_FILE,
    CHANGE_URL,
    FINISH_LOADING,
    ADD_PET,
    SAVE_CURRENT_PET,
    UPDATE_PET,
    SAVE_PET_TO_DELETE,
    DELETE_PET,
    DELETE_PET_ON_SCREEN,
    CLEAR_CURRENT_PET,
    CLEAR_NEW_PET,
    ADD_WEIGHT,
    DELETE_WEIGHT,
    SAVE_CURRENT_WEIGHT,
    ADD_VACCINE,
    DELETE_VACCINE,
    SAVE_CURRENT_VACCINE,
    ADD_DEWORMING,
    DELETE_DEWORMING,
    SAVE_CURRENT_DEWORMING,
    ADD_ANTIFLEA,
    DELETE_ANTIFLEA,
    SAVE_CURRENT_ANTIFLEA,
} from '../actions';

const initialState = {
    petsList: [],
    currentPet: {},
    id: null,
    name: '',
    age: '',
    species: '',
    breed: '',
    sex: 'mâle',
    birthdate: '',
    ide: '',
    weight: [],
    vaccine: [],
    deworming: [],
    antiflea: [],
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
                isPetsLoading: true,
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
                avatarUrl: action.currentPet.avatarUrl,
                id: action.currentPet._id,
                name: action.currentPet.name,
                age: action.currentPet.age,
                species: action.currentPet.species,
                breed: action.currentPet.breed,
                sex: action.currentPet.sex,
                birthdate: action.currentPet.birthdate,
                ide: action.currentPet.ide,
            };
        case ADD_PET:
            return {
                ...state,
                petsList: [...state.pets.petsList, action.pet]
            };
        case UPDATE_PET:
            return {
                ...state,
            };
        case SAVE_PET_TO_DELETE:
            return {
                ...state,
                id: action.id,
            };
        case DELETE_PET_ON_SCREEN:
            return {
                ...state,
                petsList: [...state.petsList.filter((pet) => pet._id !== action.id)],
            };
        case DELETE_PET:
            return {
                ...state,
            };
        case CLEAR_CURRENT_PET:
            return {
                ...state,
                currentPet: {},
                id: '',
                name: '',
                age: '',
                species: '',
                breed: '',
                sex: 'mâle',
                birthdate: '',
                ide: '',
                avatarUrl: '',
            };
        case CLEAR_NEW_PET:
            return {
                ...state,
                name: '',
                age: '',
                species: '',
                breed: '',
                sex: 'mâle',
                birthdate: '',
                ide: '',
                open: false,
                avatarUrl: '',
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
        case ADD_WEIGHT:
            console.log('ACTION WEIGHT ', action.weight)
            return {
                ...state,
                weight: [...state.pets.weight, action.weight]
        };
        case SAVE_CURRENT_WEIGHT:
            return {
                ...state,
                weight: action.currentWeight,
        };
        case DELETE_WEIGHT:
            const newWeight = state.pets.weight.filter(item => item._id !==  action.id);
            return {
                ...state,
                weight: newWeight,
        };
        case ADD_VACCINE:
            console.log('ACTION VACCINE ', action.vaccine)
            return {
                ...state,
                vaccine: [...state.pets.vaccine, action.vaccine]
        };
        case SAVE_CURRENT_VACCINE:
            return {
                ...state,
                vaccine: action.currentVaccine,
        };
        case DELETE_VACCINE:
            const newVaccine = state.pets.vaccine.filter(item => item._id !==  action.id);
            return {
                ...state,
                vaccine: newVaccine,
        };
        case ADD_DEWORMING:
            console.log('ACTION VACCINE ', action.vaccine)
            return {
                ...state,
                deworming: [...state.pets.deworming, action.deworming]
        };
        case SAVE_CURRENT_DEWORMING:
            return {
                ...state,
                deworming: action.currentDeworming,
        };
        case DELETE_DEWORMING:
            const newDeworming = state.pets.deworming.filter(item => item._id !==  action.id);
            return {
                ...state,
                deworming: newDeworming,
        };
        case ADD_ANTIFLEA:
            console.log('ACTION ANTIFLEA ', action.antiflea)
            return {
                ...state,
                antiflea: [...state.pets.antiflea, action.antiflea]
        };
        case SAVE_CURRENT_ANTIFLEA:
            return {
                ...state,
                antiflea: action.currentAntiflea,
        };
        case DELETE_ANTIFLEA:
            const newAntiflea = state.pets.antiflea.filter(item => item._id !==  action.id);
            return {
                ...state,
                antiflea: newAntiflea,
        };
        default:
        return state;
    }
};

export default petReducer;
