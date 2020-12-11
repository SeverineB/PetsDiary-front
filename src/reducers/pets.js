import {
    OPEN_MODAL_LOGIN,
    GET_PETSLIST,
    SAVE_PETSLIST,
    SAVE_CURRENT_PET,
    SAVE_CURRENT_WEIGHT,
    CHANGE_FIELD,
    CHANGE_EDIT_FIELD,
    CHANGE_FILE,
    CHANGE_URL,
    ADD_PET,
    SEND_PET,
    UPDATE_PET,
    DELETE_PET,
    CLEAR_NEW_PET,
    FINISH_LOADING,
    DELETE_WEIGHT,
    REMOVE_WEIGHT
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
    vaccine: [
        {
        vaccineDate: '',
        vaccineName: '',
        },
    ],
    deworming: [
        {
        dewormingDate: '',
        dewormingName: '',
        },
    ],
    antiflea: [
        {
        antifleaDate: '',
        antifleaName: '',
        },
    ],
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
            console.log('je suis dans GET PETSLIST REDUCER')
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
            };
        case ADD_PET:
            console.log('ACTION PET ', action.pet)
            return {
                ...state,
                petsList: [...state.petsList, action.pet]
            };
        case SEND_PET:
            console.log('ACTION PET ', action.pet)
            return {
                ...state,
                petsList: [...state.petsList, action.pet]
            };
        case UPDATE_PET:
            return {
                ...state,
            };
        case DELETE_PET:
            console.log('STATE IN DELETE PETS', state.pets.petsList)
            return {
                ...state,
                petsList: state.pets.petsList.filter((pet) => pet._id !== action.id),
            };
        case CLEAR_NEW_PET:
            return {
                ...state,
                name: '',
                age: '',
                species: '',
                breed: '',
                sex: '',
                birthdate: '',
                ide: '',
                open: false,
                avatarUrl: '',
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
        case DELETE_WEIGHT:
            console.log('STATE PETS REDUCER IN DELETE WEIGHT', state.pets.currentPet);
            return {
                ...state,
            };
        case REMOVE_WEIGHT:
            console.log('STATE PETS REDUCER IN REMOVE WEIGHT ', state.pets.currentPet);
            console.log(state.pets.currentPet.weight.filter((item) => item._id !== action.id))
            return {
                ...state,
            };
        case REMOVE_WEIGHT:
            console.log('je suis dans le reducer');
            console.log(state.pets.weight.filter((item) => item._id !== action.id))
                return {
                    ...state,
                    weight: [
                        ...state.pets.weight.filter((item) => item._id !== action.id)
                    ],
                };
        default:
        return state;
    }
};

export default petReducer;
