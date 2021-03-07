import {
    GET_EVENTSLIST,
    SAVE_EVENTSLIST,
    CHANGE_FIELD,
    CHANGE_EDIT_FIELD,
    FINISH_LOADING,
    ADD_EVENT,
    SAVE_CURRENT_EVENT,
    UPDATE_EVENT,
    SAVE_EVENT_TO_DELETE,
    DELETE_EVENT,
    DELETE_EVENT_ON_SCREEN,
    CLEAR_CURRENT_EVENT,
    CLEAR_NEW_EVENT
} from '../actions';

const initialState = {
    eventsList: [],
    currentEvent: {},
    id: null,
    name: '',
    startDate: '',
    endDate: '',
    address: '',
    open: false,
    isEventsLoading: false,
    isEventsLoaded: false,
    errorOnField: false,
    userId: '',
};

const eventReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_EVENTSLIST:
            return {
                ...state,
                isEventsLoading: true,
            };
        case SAVE_EVENTSLIST:
            return {
                ...state,
                eventsList: action.eventsList,
                isEventsLoaded: true,
            };
        case SAVE_CURRENT_EVENT:
            return {
                ...state,
                currentEvent: action.currentEvent,
                name: action.currentEvent.name,
                startDate: action.currentEvent.startDate,
                endDate: action.currentEvent.endDate,
                address: action.currentEvent.address,
            };
        case ADD_EVENT:
            return {
                ...state,
                eventsList: [...state.events.eventsList, action.event]
            };
        case UPDATE_EVENT:
            return {
                ...state,
            };
        case SAVE_EVENT_TO_DELETE:
            return {
                ...state,
                id: action.id,
            };
        case DELETE_EVENT_ON_SCREEN:
            return {
                ...state,
                eventsList: [...state.eventsList.filter((event) => event._id !== action.id)],
            };
        case DELETE_EVENT:
            return {
                ...state,
            };
        case CLEAR_CURRENT_EVENT:
            return {
                ...state,
                currentEvent: {},
                id: '',
                name: '',
                startDate: '',
                endDate: '',
                address: '',
            };
        case CLEAR_NEW_EVENT:
            return {
                ...state,
                name: '',
                age: '',
                startDate: '',
                endDate: '',
                address: '',
                open: false,
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
        case FINISH_LOADING:
            return {
                ...state,
                isEventsLoading: false,
            };
        default:
        return state;
    }
};

export default eventReducer;
