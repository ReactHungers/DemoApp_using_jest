import React from 'react';
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import InputField from './InputField'

configure({ adapter: new Adapter() })

test('testing input field', () => {
    const wrapper = shallow(
        <InputField 
            type="text"
            name="username" 
            className="form-control" 
            placeholder="Enter your username" 
            val="raman" 
        />
    );
    expect(wrapper.find('input').length).toEqual(1)
    expect(wrapper.find('.form-control').length).toEqual(1)
})