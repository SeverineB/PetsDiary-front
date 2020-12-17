// ACTION TYPES

export const SAVE_CURRENT_WEIGHT = 'SAVE_CURRENT_WEIGHT';
export const ADD_WEIGHT = 'ADD_WEIGHT';
export const UPDATE_WEIGHT = 'UPDATE_WEIGHT';
export const DELETE_WEIGHT = 'DELETE_WEIGHT';

// ACTION CREATOR

export const saveCurrentWeight = (currentWeight) => ({
    type: SAVE_CURRENT_WEIGHT,
    currentWeight,
});

export const addWeight = (weight) => ({
    type: ADD_WEIGHT,
    weight
});

export const updateWeight = () => ({
    type: UPDATE_WEIGHT,
})

export const deleteWeight = (id) => ({
    type: DELETE_WEIGHT,
    id
})