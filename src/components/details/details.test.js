import {shallow} from 'enzyme';
import React from 'react';
import Details from './details.component';

it('expect to render Header component', () => {
    expect(shallow(<Details/>)).toMatchSnapshot();
})

