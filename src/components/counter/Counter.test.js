import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from './Counter';

configure({ adapter: new Adapter() })

describe('Counter component ', () => {
    // starts the count with 0
    it('starts with count 0', () => {
        const wrapper = shallow(<Counter />)
        let text = wrapper.find('p').text()
        expect(text).toEqual('Count: 0')
    })
    
    // increase the count with 1
    it('increment count with 1', () => {
        const wrapper = shallow(<Counter />)
        const IncrementBtn = wrapper.find('Button.increment')
        IncrementBtn.simulate('click')
        let text = wrapper.find('p').text()
        expect(text).toEqual('Count: 1')
    })
    
    // decrease the count with 1
    it('decremtn count with 1', () => {
        const wrapper = shallow(<Counter />)
        const DecrementBtn = wrapper.find('Button.decrement')
        DecrementBtn.simulate('click')
        let text = wrapper.find('p').text()
        expect(text).toEqual('Count: -1')
    })
})