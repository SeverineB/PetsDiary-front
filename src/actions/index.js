export * from './pets';
export * from './users';
export * from './error';
export * from './auth';
export * from './weight';
export * from './vaccine';

export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHANGE_EDIT_FIELD = 'CHANGE_EDIT_FIELD';
/* export const CHANGE_EDIT_ARRAY_FIELD = 'CHANGE_EDIT_ARRAY_FIELD';
export const OPEN_MODAL_LOGIN = 'OPEN_MODAL_LOGIN'; */
export const OPEN_MODAL = 'OPEN_MODAL';
export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
export const TOGGLE_SHOW_LOGIN = 'TOGGLE_SHOW_LOGIN';
export const FINISH_LOADING = 'FINISH_LOADING';

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

/* export const changeEditArrayField = (value, name) => ({
  type: CHANGE_EDIT_ARRAY_FIELD,
  value,
  name,
}); */

export const openModal = () => ({
    type: OPEN_MODAL,
});

export const toggleShowLogin = () => ({
    type: TOGGLE_SHOW_LOGIN,
});

export const finishLoading = () => ({
    type: FINISH_LOADING,
  });

export const toggleLogin = () => ({
    type: TOGGLE_LOGIN,
  });
