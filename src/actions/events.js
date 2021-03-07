// ACTION TYPES
export const GET_EVENTSLIST = 'GET_EVENTSLIST';
export const SAVE_EVENTSLIST = 'SAVE_EVENTSLIST';
export const SAVE_CURRENT_EVENT = 'SAVE_CURRENT_EVENT';
export const ADD_EVENT = 'ADD_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const SAVE_EVENT_TO_DELETE = 'SAVE_EVENT_TO_DELETE';
export const DELETE_EVENT = 'DELETE_EVENT';
export const DELETE_EVENT_ON_SCREEN = 'DELETE_EVENT_ON_SCREEN';

export const CLEAR_NEW_EVENT = 'CLEAR_NEW_EVENT';
export const FINISH_LOADING = 'FINISH_LOADING';

// ACTION CREATOR

export const getEventsList = () => ({
  type: GET_EVENTSLIST,
});

export const saveEventsList = (eventsList) => ({
  type: SAVE_EVENTSLIST,
  eventsList,
});

export const saveCurrentEvent = (currentEvent) => ({
  type: SAVE_CURRENT_EVENT,
  currentEvent,
});

export const addEvent = (event) => ({
  type: ADD_EVENT,
  event
});

export const updateEvent = () => ({
  type: UPDATE_EVENT,
});

export const clearNewEvent = () => ({
  type: CLEAR_NEW_EVENT,
});

export const saveEventToDelete = (id) => ({
    type: SAVE_EVENT_TO_DELETE,
    id,
  });

export const deleteEvent = () => ({
  type: DELETE_EVENT,
});

export const deleteEventOnScreen = (id) => ({
    type: DELETE_EVENT_ON_SCREEN,
    id,
  });

export const finishLoading = () => ({
  type: FINISH_LOADING,
});
