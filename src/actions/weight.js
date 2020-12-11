// ACTION TYPES

export const SAVE_WEIGHT = 'SAVE_WEIGHT';
export const UPDATE_WEIGHT = 'UPDATE_WEIGHT';
export const DELETE_WEIGHT = 'DELETE_WEIGHT';
export const REMOVE_WEIGHT = 'REMOVE_WEIGHT';

// ACTION CREATOR

export const saveWeight = (weight) => ({
    type: SAVE_WEIGHT,
    weight
})

export const updateWeight = () => ({
    type: UPDATE_WEIGHT,
})

export const deleteWeight = (id) => ({
    type: DELETE_WEIGHT,
    id
})

export const removeWeight = (id) => ({
    type: REMOVE_WEIGHT,
    id
})
