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
    ADD_WEIGHT,
    UPDATE_WEIGHT,
    DELETE_WEIGHT,
    ADD_VACCINE,
    UPDATE_VACCINE,
    DELETE_VACCINE,
    ADD_DEWORMING,
    UPDATE_DEWORMING,
    DELETE_DEWORMING,
    ADD_ANTIFLEA,
    UPDATE_ANTIFLEA,
    DELETE_ANTIFLEA,
    saveCurrentPet,
    saveCurrentWeight,
    saveCurrentVaccine,
    saveCurrentDeworming,
    saveCurrentAntiflea,
    clearNewPet,
    finishLoading,
    getErrors
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
                    store.dispatch(clearNewPet());
                    store.dispatch(getPetsList());
            })
            .catch((error) => {
                console.error('Une erreur est survenue ', error.message);
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

    case ADD_WEIGHT: {
        console.log('je suis dans ADD WEIGHT ')
        const state = store.getState();
        const {
            weightDate,
            weightValue
        } = state.pets;
        const pet_id = state.pets.currentPet._id;
        api.post('pet/weight/add', {
            pet_id,
            weightDate,
            weightValue
        },
        {
            withCredentials: true,
        })
            .then((response) => {
                console.log('Middleware ADD WEIGHT ', response.data);
                store.dispatch(saveCurrentPet(response.data));
                store.dispatch(saveCurrentWeight(response.data.weight));
                store.dispatch(getPetsList());
                store.dispatch(clearNewPet());
                
            })
            .catch((error) => {
                console.error('Une erreur est survenue ', error.response.data.message);
                store.dispatch(getErrors(error.response.data.message));
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
                console.error('une erreur est survenue ', error.response.data.message);
                store.dispatch(getErrors(error.response.data.message));
            });
        break;
    }

    case DELETE_WEIGHT: {
        const state = store.getState();
        const weightId = localStorage.getItem('weightToDelete');
        console.log('je lance la requête pour supprimer un item de poids', weightId);
        api.delete(`pet/weight/${weightId}`,
            {
                withCredentials: true,
            })
            .then((response) => {
                console.log('ITEM DELETED ', response.data);
                store.dispatch(saveCurrentPet(response.data))
                store.dispatch(saveCurrentWeight(response.data.weight));
            })
            .catch((error) => {
                console.error(error);
                store.dispatch(getErrors(error.response.data.message));
            });
        break;
    }

    case ADD_VACCINE: {
        console.log('je suis dans ADD VACCINE ')
        const state = store.getState();
        const {
            vaccineDate,
            vaccineName
        } = state.pets;
        const pet_id = state.pets.currentPet._id;
        api.post('pet/vaccine/add', {
            pet_id,
            vaccineDate,
            vaccineName
        },
        {
            withCredentials: true,
        })
            .then((response) => {
                console.log('Middleware ADD VACCINE ', response.data);
                store.dispatch(saveCurrentPet(response.data));
                store.dispatch(saveCurrentVaccine(response.data.vaccine));
                store.dispatch(getPetsList());
                store.dispatch(clearNewPet());
                
            })
            .catch((error) => {
                console.error('Une erreur est survenue ', error.message);
                store.dispatch(getErrors(error.response.data.message));
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
                store.dispatch(getErrors(error.response.data.message));
            });
        break;
    }

    case DELETE_VACCINE: {
        const state = store.getState();
        const vaccineId = localStorage.getItem('vaccineToDelete');
        api.delete(`pet/vaccine/${vaccineId}`,
            {
                withCredentials: true,
            })
            .then((response) => {
                console.log('ITEM DELETED ', response.data);
                store.dispatch(saveCurrentPet(response.data))
                store.dispatch(saveCurrentVaccine(response.data.vaccine));
            })
            .catch((error) => {
                store.dispatch(getErrors(error.response.data.message));
            });
        break;
    }
    case ADD_DEWORMING: {
        console.log('je suis dans ADD DEWORMING ')
        const state = store.getState();
        const {
            dewormingDate,
            dewormingName
        } = state.pets;
        const pet_id = state.pets.currentPet._id;
        api.post('pet/deworming/add', {
            pet_id,
            dewormingDate,
            dewormingName
        },
        {
            withCredentials: true,
        })
            .then((response) => {
                console.log('Middleware ADD DEWORMING ', response.data);
                store.dispatch(saveCurrentPet(response.data));
                store.dispatch(saveCurrentDeworming(response.data.deworming));
                store.dispatch(getPetsList());
                store.dispatch(clearNewPet());
                
            })
            .catch((error) => {
                console.error('Une erreur est survenue ', error.message);
                store.dispatch(getErrors(error.response.data.message));
            });
        break;
    }

    case UPDATE_DEWORMING: {
        console.log('je lance la requête pour éditer le vermifuge');
        const state = store.getState();
        const {
            dewormingDate,
            dewormingName,
        } = state.pets;
        const dewormingId = localStorage.getItem('itemToUpdate');
        api.put(`pet/deworming/edit/${dewormingId}`, {
            dewormingDate,
            dewormingName,
        },
        {
            withCredentials: true,
        })
            .then((response) => {
                console.log('Middleware UPDATE PET DEWORMING DETAILS API response ', response.data);
                store.dispatch(getPetsList());
                store.dispatch(clearNewPet());
            })
            .catch((error) => {
                console.error('une erreur est survenue ', error);
                store.dispatch(getErrors(error.response.data.message));
            });
        break;
    }

    case DELETE_DEWORMING: {
        const state = store.getState();
        const dewormingId = localStorage.getItem('dewormingToDelete');
        api.delete(`pet/deworming/${dewormingId}`,
            {
                withCredentials: true,
            })
            .then((response) => {
                console.log('ITEM DELETED ', response.data);
                store.dispatch(saveCurrentPet(response.data))
                store.dispatch(saveCurrentDeworming(response.data.deworming));
            })
            .catch((error) => {
                store.dispatch(getErrors(error.response.data.message));
            });
        break;
    }

    case ADD_ANTIFLEA: {
        console.log('je suis dans ADD ANTIFLEA ')
        const state = store.getState();
        const {
            antifleaDate,
            antifleaName
        } = state.pets;
        const pet_id = state.pets.currentPet._id;
        api.post('pet/antiflea/add', {
            pet_id,
            antifleaDate,
            antifleaName
        },
        {
            withCredentials: true,
        })
            .then((response) => {
                console.log('Middleware ADD DEWORMING ', response.data);
                store.dispatch(saveCurrentPet(response.data));
                store.dispatch(saveCurrentAntiflea(response.data.deworming));
                store.dispatch(getPetsList());
                store.dispatch(clearNewPet());
                
            })
            .catch((error) => {
                console.error('Une erreur est survenue ', error.message);
                store.dispatch(getErrors(error.response.data.message));
            });
        break;
    }

    case UPDATE_ANTIFLEA: {
        console.log('je lance la requête pour éditer l\'anti-puces');
        const state = store.getState();
        const {
            antifleaDate,
            antifleaName,
        } = state.pets;
        const antifleaId = localStorage.getItem('itemToUpdate');
        api.put(`pet/deworming/edit/${antifleaId}`, {
            antifleaDate,
            antifleaName,
        },
        {
            withCredentials: true,
        })
            .then((response) => {
                console.log('Middleware UPDATE PET ANTIFLEA DETAILS API response ', response.data);
                store.dispatch(getPetsList());
                store.dispatch(clearNewPet());
            })
            .catch((error) => {
                console.error('une erreur est survenue ', error);
                store.dispatch(getErrors(error.response.data.message));
            });
        break;
    }

    case DELETE_ANTIFLEA: {
        const state = store.getState();
        const antifleaId = localStorage.getItem('antifleaToDelete');
        api.delete(`pet/antiflea/${antifleaId}`,
            {
                withCredentials: true,
            })
            .then((response) => {
                console.log('ITEM DELETED ', response.data);
                store.dispatch(saveCurrentPet(response.data))
                store.dispatch(saveCurrentAntiflea(response.data.antiflea));
            })
            .catch((error) => {
                store.dispatch(getErrors(error.response.data.message));
            });
        break;
    }
    default:
    next(action);
    }
};

export default pets;
