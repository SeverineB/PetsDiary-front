/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import api from '../services/api';

import {
    GET_PETSLIST,
    getPetsList,
    DELETE_PET,
    savePetsList,
    ADD_PET,
    UPDATE_PET,
    UPDATE_WEIGHT,
    DELETE_WEIGHT,
    UPDATE_VACCINE,
    saveCurrentPet,
    clearNewPet,
    finishLoading,
    removeWeight
} from '../actions';

const pets = (store) => (next) => (action) => {
switch (action.type) {
    case GET_PETSLIST: {
        const userId = localStorage.getItem('id');
        api.get(`user/${userId}/pets`,
            {
                withCredentials: true,
            })
            .then((response) => {
                console.log('middleware GET PETSLIST response.data vaut ', response.data);
                store.dispatch(savePetsList(response.data));
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                store.dispatch(finishLoading());
            });
        break;
    }

    case ADD_PET: {
        console.log('je suis dans ADD PET ')
        const state = store.getState();
        const {
            name,
            age,
            species,
            breed,
            sex,
            birthdate,
            ide,
            avatar
        } = state.pets;
        const { id } = state.auth.session;
        const formData = new FormData();
        formData.append('avatar', avatar);
        formData.append('name', name);
        formData.append('age', age);
        formData.append('species', species);
        formData.append('breed', breed);
        formData.append('sex', sex);
        formData.append('birthdate', birthdate);
        formData.append('ide', ide);
        formData.append('user_id', id);
        console.log('FORMDATA ', formData);
        api.post('pet/add', formData,
            {
                headers: {
                    'content-type': 'multipart/form-data',
            },
                withCredentials: true,
            })
            .then((response) => {
                console.log('Middleware API response ', response.data);
                    store.dispatch(getPetsList());
            })
            .catch((error) => {
                console.error('Une erreur est survenue ', error);
            });
        break;
    }

    case UPDATE_PET: {
        console.log('je lance la requête pour éditer les infos générales de l\'animal');
        const state = store.getState();
        const {
            name,
            age,
            species,
            breed,
        } = state.pets;
        const id = state.pets.currentPet._id;
        const formData = new FormData();
        formData.append('avatar', state.pets.avatar);
        formData.append('name', name);
        formData.append('age', age);
        formData.append('species', species);
        formData.append('breed', breed);
        api.patch(`pet/edit/${id}`, formData,
            {
                headers: {
                    'content-type': 'multipart/form-data',
            },
                withCredentials: true,
            })
            .then((response) => {
                console.log('Middleware UPDATE PET API response ', response.data);
                store.dispatch(saveCurrentPet(response.data));
                store.dispatch(getPetsList());
                store.dispatch(clearNewPet());
            })
            .catch((error) => {
                console.error('Une erreur est survenue ', error);
            });
        break;
    }

    case UPDATE_WEIGHT: {
        console.log('je lance la requête pour éditer le poids');
        const state = store.getState();
        const {
            weightValue,
            weightDate
        } = state.pets;
        const weightId = localStorage.getItem('itemToUpdate');
        api.put(`pet/weight/edit/${weightId}`, {
            weightValue,
            weightDate,
        },
        {
            withCredentials: true,
        })
            .then((response) => {
                console.log('Middleware UPDATE PET WEIGHT DETAILS API response ', response.data);
                store.dispatch(saveCurrentPet(response.data));
                store.dispatch(getPetsList());
                store.dispatch(clearNewPet());
            })
            .catch((error) => {
                console.error('une erreur est survenue ', error);
            });
        break;
    }

    case UPDATE_VACCINE: {
        console.log('je lance la requête pour éditer le vaccin');
        const state = store.getState();
        const {
            vaccineDate,
            vaccineName,
        } = state.pets;
        const vaccineId = localStorage.getItem('itemToUpdate');
        api.put(`pet/vaccine/edit/${vaccineId}`, {
            vaccineDate,
            vaccineName,
        },
        {
            withCredentials: true,
        })
            .then((response) => {
                console.log('Middleware UPDATE PET WEIGHT DETAILS API response ', response.data);
                store.dispatch(getPetsList());
                store.dispatch(clearNewPet());
            })
            .catch((error) => {
                console.error('une erreur est survenue ', error);
            });
        break;
    }

    case DELETE_PET: {
        const state = store.getState();
        const petId = state.pets.currentPet._id;
        console.log('je lance la requête pour supprimer un animal');
        api.delete(`pet/${petId}`,
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

    case DELETE_WEIGHT: {
        const state = store.getState();
        const weightId = localStorage.getItem('weightToDelete');
        console.log('je lance la requête pour supprimer un item de poids');
        api.delete(`pet/weight/${weightId}`,
            {
                withCredentials: true,
            })
            .then((response) => {
                console.log('ITEM DELETED ', response);
                store.dispatch(removeWeight(weightId));
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

export default pets;
