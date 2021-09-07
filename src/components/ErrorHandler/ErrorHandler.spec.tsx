import React from 'react';
import {render} from '@testing-library/react-native';
import ErrorHandler from './ErrorHandler';

describe('ErrorHandler', () => {
  it('should render the component ErrorHandler correctly', () => {
    const {getByTestId} = render(
      <ErrorHandler title="título" description="uma descrição para teste" />,
    );

    const title = getByTestId('title');
    const description = getByTestId('description');

    expect(title.props.children).toEqual('título');
    expect(description.props.children).toEqual('uma descrição para teste');
  });
});
