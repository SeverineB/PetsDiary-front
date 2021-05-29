/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import api from '../services/api';

import {
    GET_EVENTSLIST,
    getEventsList,
    DELETE_EVENT,
    saveEventsList,
    ADD_EVENT,
    UPDATE_EVENT,
    saveCurrentEvent,
    clearNewEvent,
    finishLoading,
    getErrors
} from '../actions'

const events = (store) => (next) => (action) => {
switch (action.type) {
    case GET_EVENTSLIST: {
        const userId = localStorage.getItem('id')
        api.get(`user/${userId}/events`,
            {
                withCredentials: true,
            })
            .then((response) => {
                store.dispatch(saveEventsList(response.data))
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                store.dispatch(finishLoading())
            })
        break
    }

    case ADD_EVENT: {
        const state = store.getState()
        const {
            title,
            start,
            end,
            address
        } = state.events
        const user_id = state.auth.session.id
        const pet_id = localStorage.getItem("petId")
        
        api.post('event/add', {
            user_id,
            title,
            start,
            end,
            address,
            pet_id
        },
            {
                withCredentials: true,
            })
            .then((response) => {
                store.dispatch(clearNewEvent())
                store.dispatch(getEventsList())
            })
            .catch((error) => {
                console.error('Une erreur est survenue ', error.message)
            })
        break
    }

    case UPDATE_EVENT: {
        const state = store.getState()
        const {
            title,
            start,
            end,
            address,
        } = state.events

        const id = state.events.currentevent._id

        api.patch(`event/edit/${id}`, {
            title,
            start,
            end,
            address
        },
            {
                withCredentials: true,
            })
            .then((response) => {
                store.dispatch(saveCurrentEvent(response.data))
                store.dispatch(getEventsList())
            })
            .catch((error) => {
                console.error('Une erreur est survenue ', error)
            })
        break
    }


    case DELETE_EVENT: {
        const state = store.getState()
        const eventId = state.events.id
        api.delete(`event/${eventId}`,
            {
                withCredentials: true,
            })
            .then((response) => {
                console.log(response)

            })
            .catch((error) => {
                console.error(error)
            })
        break
    }

    default:
    next(action)
    }
};

export default events
