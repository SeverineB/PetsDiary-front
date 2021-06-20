import Pet from '../../src/components/Home/Pet/Pet';
import React from 'react';
import { mount } from 'enzyme';


describe('components', () => {
    it('Pet component render infos of a pet', () => {
        const pet = {
            id: 1,
            name: 'JeanJean',
            age: 3,
            species: 'dragon',
            breed: 'Komodo',
            sex: 'female',
            birthdate: '2018-05-12'
        }
        const wrapper = mount(
            <Pet pet={pet} />
        )
        const p = wrapper.find('.pet-container')
        expect(p.text()).toBe('JeanJean')
    })
})