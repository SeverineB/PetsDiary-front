export * from './pets';
export * from './users';
export * from './error';
export * from './auth';
export * from './weight';
export * from './vaccine';
export * from './deworming';
export * from './antiflea';

export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHANGE_EDIT_FIELD = 'CHANGE_EDIT_FIELD';
export const TOGGLE_SHOW_LOGIN = 'TOGGLE_SHOW_LOGIN';
export const FINISH_LOADING = 'FINISH_LOADING';
export const CLEAR_CURRENT_PET = 'CLEAR_CURRENT_PET';

export const changeField = (value, name) => ({
    type: CHANGE_FIELD,
    value,
    name,
});

export const changeEditField = (value, name) => ({
    type: CHANGE_EDIT_FIELD,
    value,
    name,
});

export const clearCurrentPet = () => ({
    type: CLEAR_CURRENT_PET,
});

export const toggleShowLogin = () => ({
    type: TOGGLE_SHOW_LOGIN,
});

export const finishLoading = () => ({
    type: FINISH_LOADING,
});