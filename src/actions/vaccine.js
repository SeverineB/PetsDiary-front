// ACTION TYPES

export const SAVE_CURRENT_VACCINE = 'SAVE_CURRENT_VACCINE';
export const ADD_VACCINE = 'ADD_VACCINE';
export const UPDATE_VACCINE = 'UPDATE_VACCINE';
export const DELETE_VACCINE = 'DELETE_VACCINE';

// ACTION CREATOR
export const saveCurrentVaccine = (currentVaccine) => ({
    type: SAVE_CURRENT_VACCINE,
    currentVaccine
})

export const addVaccine = (vaccine) => ({
    type: ADD_VACCINE,
    vaccine
});

export const updateVaccine = () => ({
    type: UPDATE_VACCINE,
})

export const deleteVaccine = (id) => ({
    type: DELETE_VACCINE,
    id
})
