import axios from 'axios';

import { FETCH_PETS, savePets } from '../actions';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PETS:
      // je traduis l'intention d'aller chercher les recettes
      console.log('je lance la requête pour récupérer les animaux');
      axios.get('http://localhost:3000/api/pets/')
        .then((response) => {
          // je recup mes data
          // je veux les afficher
          // ce qui est affichée dans l'appli dépend de la source de vérité : le state
          // donc toi la data go dans le state
          // j'ai une intention : modifier le state
          // intention = modification du state ? dispatch d'une action et traduction dans le reducer
          console.log(response.data);
          const savePetsAction = savePets(response.data);
          store.dispatch(savePetsAction);
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
