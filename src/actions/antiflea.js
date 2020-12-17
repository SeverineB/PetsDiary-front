// ACTION TYPES

export const SAVE_CURRENT_ANTIFLEA = 'SAVE_CURRENT_ANTIFLEA';
export const ADD_ANTIFLEA = 'ADD_ANTIFLEA';
export const UPDATE_ANTIFLEA = 'UPDATE_ANTIFLEA';
export const DELETE_ANTIFLEA = 'DELETE_ANTIFLEA';

// ACTION CREATOR
export const saveCurrentAntiflea = (currentAntiflea) => ({
    type: SAVE_CURRENT_ANTIFLEA,
    currentAntiflea
})

export const addAntiflea = (antiflea) => ({
    type: ADD_ANTIFLEA,
    antiflea
});

export const updateAntiflea = () => ({
    type: UPDATE_ANTIFLEA,
})

export const deleteAntiflea = (id) => ({
    type: DELETE_ANTIFLEA,
    id
})
