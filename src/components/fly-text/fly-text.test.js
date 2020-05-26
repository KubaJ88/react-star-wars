import {shallow} from 'enzyme';
import React from 'react';
import flyTextComponent from './fly-text.component';

it('expect to render Header component', () => {
    expect(shallow(<flyTextComponent/>)).toMatchSnapshot();
})

