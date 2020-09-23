import axios from 'axios';

import { GET_PETS_LIST, getPetsList, DELETE_PETS, savePetsList, ADD_PETS, clearNewPet } from '../actions';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_PETS: {
      const state = store.getState();
      const {
        name,
        age,
        species,
        breed,
      } = state.pets;
      axios.post('http://localhost:3000/api/pets/', {
        name,
        age,
        species,
        breed,
      })
        .then((response) => {
          console.log('Middleware API response ', response.data);
          store.dispatch(getPetsList());
          /*store.dispatch(clearNewPet());*/
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
      axios.delete(`http://localhost:3000/api/pets/${petId}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }

    case GET_PETS_LIST:
      console.log('je lance la requête pour récupérer les animaux');
      axios.get('http://localhost:3000/api/pets/')
        .then((response) => {
          // je recup mes data
          // je veux les afficher
          // ce qui est affichée dans l'appli dépend de la source de vérité : le state
          // donc toi la data go dans le state
          // j'ai une intention : modifier le state
          // intention = modification du state ? dispatch d'une action et traduction dans le reducer
          store.dispatch(savePetsList(response.data, false));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    default:
      // je laisse passer l'action au middleware/reducer suivant
      next(action);
  }
};

export default api;
