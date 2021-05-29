import { should } from 'chai'

import petReducer, { initialState } from '../../src/reducers/pets.reducer'
import { savePetsList, addPet } from '../../src/actions/pets'
should();

describe.only('reducer for pets', () => {
    describe('initial structure', () => {
        it('should be a function', () => {
            petReducer.should.be.a('function')
        })
        it('shoud return initial state when called without args', () => {
            petReducer().should.be.an('object')
            petReducer().should.be.eql(initialState)
        })
    })

    describe('pet reducer with Save Pets List', () => {
        it('should return a modified state when receive SAVE_PETSLITS', () => {
            const fakeState = { petsList: [], isPetsLoaded: false }
            const newFakeList = [{name: 'Michel', age: 3, species: 'Chien', breed: 'Berger Malinois', sex: 'mâle', birthdate: '14/11/2018'}]
            const action = savePetsList(newFakeList)
            petReducer(fakeState, action).should.be.eql({
                isPetsLoaded: true,
                petsList: newFakeList
            })
        })
    })
})

