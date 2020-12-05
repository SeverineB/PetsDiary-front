// ACTION TYPES

export const SAVE_WEIGHT = 'SAVE_WEIGHT';
export const UPDATE_WEIGHT = 'UPDATE_WEIGHT';

// ACTION CREATOR
export const saveWeight = (weight) => ({
 type: SAVE_WEIGHT,
 weight
})

export const updateWeight = () => ({
 type: UPDATE_WEIGHT,
})
