// ACTION TYPES

export const SAVE_CURRENT_DEWORMING = 'SAVE_CURRENT_DEWORMING';
export const ADD_DEWORMING = 'ADD_DEWORMING';
export const UPDATE_DEWORMING = 'UPDATE_DEWORMING';
export const DELETE_DEWORMING = 'DELETE_DEWORMING';

// ACTION CREATOR
export const saveCurrentDeworming = (currentDeworming) => ({
    type: SAVE_CURRENT_DEWORMING,
    currentDeworming
})

export const addDeworming = (deworming) => ({
    type: ADD_DEWORMING,
    deworming
});

export const updateDeworming = () => ({
    type: UPDATE_DEWORMING,
})

export const deleteDeworming = (id) => ({
    type: DELETE_DEWORMING,
    id
})
