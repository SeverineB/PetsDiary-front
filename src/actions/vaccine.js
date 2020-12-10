// ACTION TYPES

export const SAVE_WEIGHT = 'SAVE_WEIGHT';
export const UPDATE_VACCINE = 'UPDATE_VACCINE';

// ACTION CREATOR
export const saveWeight = (weight) => ({
 type: SAVE_WEIGHT,
 weight
})

export const updateVaccine = () => ({
 type: UPDATE_VACCINE,
})
