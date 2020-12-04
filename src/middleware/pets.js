/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import api from '../services/api';

import {
  GET_PETSLIST,
  getPetsList,
  DELETE_PETS,
  savePetsList,
  ADD_PETS,
  UPDATE_PET,
  UPDATE_PET_DETAILS,
  saveCurrentPet,
  saveCurrentPetDetails,
  clearNewPet,
  finishLoading,
} from '../actions';

const pets = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_PETS: {
      const state = store.getState();
      const {
        name,
        age,
        species,
        breed,
        sex,
        birthdate,
        ide,
      } = state.pets;
      const { id } = state.auth.session;
      const formData = new FormData();
      formData.append('avatar', state.pets.avatar);
      formData.append('name', name);
      formData.append('age', age);
      formData.append('species', species);
      formData.append('breed', breed);
      formData.append('sex', sex);
      formData.append('birthdate', birthdate);
      formData.append('ide', ide);
      formData.append('user_id', id);
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
          store.dispatch(clearNewPet());
        })
        .catch((error) => {
          console.error('erreur est survenue ', error);
        });
      break;
    }

    case UPDATE_PET: {
      console.log('je lance la requête pour éditer les infos de suivi');
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
          console.error('erreur est survenue ', error);
        });
      break;
    }

    case UPDATE_PET_DETAILS: {
      console.log('je lance la requête pour éditer les infos de suivi');
      const state = store.getState();
      const {
        ide,
        birthdate,
        weight,
        vaccine,
        deworming,
        antiflea,
      } = state.pets;
      const detailsId = state.pets.currentPet.pet_details._id;

      api.patch(`pet/edit/details/${detailsId}`, {
        ide,
        birthdate,
        weight,
        vaccine,
        deworming,
        antiflea,
      },
      {
        headers: {
          'content-type': 'multipart/form-data',
        },
        withCredentials: true,
      })
        .then((response) => {
          console.log('Middleware UPDATE PET DETAILS API response ', response.data);
          store.dispatch(saveCurrentPet(response.data));
          store.dispatch(getPetsList());
          store.dispatch(clearNewPet());
        })
        .catch((error) => {
          console.error('erreur est survenue ', error);
        });
      break;
    }

    case DELETE_PETS: {
      const state = store.getState();
      const petId = state.pets.petsList.id;
      console.log('je lance la requête pour supprimer un animal');
      api.delete(`pet/${petId}`,
        {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }

    case GET_PETSLIST: {
      console.log('je lance la requête pour récupérer les animaux par user');
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
    default:
      next(action);
  }
};

export default pets;
