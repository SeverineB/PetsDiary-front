import { 
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    FINISH_LOADING,
    CHANGE_USER_FIELD_REGISTER
} from '../actions';

const initialState = {
    username: '',
    email: '',
    password: '',
    isLoading: false,
    isSignedUp: false,
    isFailed: false,
    error: {},
};

const register = (state = initialState, action = {}) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                isLoading: true,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isSignedUp: true,
                isLoading: true,

            };
        case REGISTER_FAILED:
            return {
                ...state,
                error: action.error,
                isSignedUp: false,
                isFailed: true,
                isLoading: true,
            };
        case FINISH_LOADING:
            return {
                ...state,
                isLoading: false,
            };
        case CHANGE_USER_FIELD_REGISTER:
            return {
                ...state,
                [action.name]: action.value,
            };
        default:
            return state;
    }
}

export default register;