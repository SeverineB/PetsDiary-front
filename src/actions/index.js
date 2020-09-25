export * from './pets';
export * from './users';

export const CHANGE_FIELD = 'CHANGE_FIELD';

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});
