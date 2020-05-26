import {shallow} from 'enzyme';
import React from 'react';
import Header from './header.component';

it('expect to render Header component', () => {
    expect(shallow(<Header/>)).toMatchSnapshot();
})

