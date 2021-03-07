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
} from '../actions';

const events = (store) => (next) => (action) => {
switch (action.type) {
    case GET_EVENTSLIST: {
        const userId = localStorage.getItem('id');
        console.log('je lance la requête pour récupérer les évènements')
        api.get(`user/${userId}/events`,
            {
                withCredentials: true,
            })
            .then((response) => {
                console.log('EVENTS LIST', response.data)
                store.dispatch(saveEventsList(response.data));
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                store.dispatch(finishLoading());
            });
        break;
    }

    case ADD_EVENT: {
        const state = store.getState();
        const {
            name,
            startDate,
            endDate,
            address
        } = state.events;
        const { id } = state.auth.session;
        
        api.post('event/add', {
            id,
            name,
            startDate,
            endDate,
            address
        },
            {
                withCredentials: true,
            })
            .then((response) => {
                console.log('Middleware API response ADD event', response.data);
                    store.dispatch(clearNewEvent());
                    store.dispatch(getEventsList());
            })
            .catch((error) => {
                console.error('Une erreur est survenue ', error.message);
            });
        break;
    }

    case UPDATE_EVENT: {
        console.log('je lance la requête pour éditer les infos générales de l\'évènement');
        const state = store.getState();
        const {
            name,
            startDate,
            endDate,
            address,
        } = state.events;

        const id = state.events.currentevent._id;

        api.patch(`event/edit/${id}`, {
            name,
            startDate,
            endDate,
            address
        },
            {
                withCredentials: true,
            })
            .then((response) => {
                console.log('Middleware UPDATE event API response ', response.data);
                store.dispatch(saveCurrentEvent(response.data));
                store.dispatch(getEventsList());
            })
            .catch((error) => {
                console.error('Une erreur est survenue ', error);
            });
        break;
    }


    case DELETE_EVENT: {
        const state = store.getState();
        const eventId = state.events.id;
        console.log('je lance la requête pour supprimer un évènement');
        api.delete(`event/${eventId}`,
            {
                withCredentials: true,
            })
            .then((response) => {
                console.log(response);

            })
            .catch((error) => {
                console.error(error);
            });
        break;
    }

    default:
    next(action);
    }
};

export default events;
