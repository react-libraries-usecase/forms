import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Basic from './../src/';

describe('Basic', () => {
    test('renders correctly', () => {
        const tree = renderer.create(<Basic />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
