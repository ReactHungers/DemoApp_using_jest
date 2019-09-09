import React from 'react';
import { shallow } from 'enzyme'
import InputField from './InputField'

test('testing input field', () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper.find('input').length).toEqual(1)
    expect(wrapper.find('.form-control').length).toEqual(1)
    expect(wrapper.find('type').length).toEqual(1)
})