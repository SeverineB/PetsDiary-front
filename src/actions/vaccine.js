// ACTION TYPES

export const SAVE_VACCINE = 'SAVE_VACCINE';
export const UPDATE_VACCINE = 'UPDATE_VACCINE';

// ACTION CREATOR
export const saveVaccine = (vaccine) => ({
 type: SAVE_VACCINE,
 vaccine
})

export const updateVaccine = () => ({
 type: UPDATE_VACCINE,
})
