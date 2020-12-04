export * from './pets';
export * from './users';
export * from './auth';

export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHANGE_EDIT_FIELD = 'CHANGE_EDIT_FIELD';
export const CHANGE_EDIT_ARRAY_FIELD = 'CHANGE_EDIT_ARRAY_FIELD';
export const TOGGLE_SHOW_LOGIN = 'TOGGLE_SHOW_LOGIN';
export const TOGGLE_SHOW_REGISTER = 'TOGGLE_SHOW_REGISTER';

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

export const changeEditArrayField = (value, name) => ({
  type: CHANGE_EDIT_ARRAY_FIELD,
  value,
  name,
});


export const toggleShowLogin = () => ({
  type: TOGGLE_SHOW_LOGIN,
});

export const toggleShowRegister = () => ({
  type: TOGGLE_SHOW_REGISTER,
});
