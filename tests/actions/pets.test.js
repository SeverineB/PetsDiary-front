import * as actions from '../../src/actions/pets';
import * as types from '../../src/actions/pets';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore()
const store = mockStore();

describe('actions', () => {
    it('should create an action to add a pet', () => {
        const pet = {
            id: 1,
            name: 'JeanJean',
            age: 3,
            species: 'dragon',
            breed: 'Komodo',
            sex: 'female',
            birthdate: '2018-05-12'
        }
        const expectedAction = {
            type: types.ADD_PET,
            pet
        }
        expect(actions.addPet(pet)).toEqual(expectedAction)
    })
})


