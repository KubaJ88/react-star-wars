import {shallow} from 'enzyme';
import React from 'react';
import Characters from './characters.component';

it('expect to render Header component', () => {
    expect(shallow(<Characters/>)).toMatchSnapshot();
})


