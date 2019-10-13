import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import UnControlledForm from './../src/UnControlledForm';

describe('UnControlledForm', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<UnControlledForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
