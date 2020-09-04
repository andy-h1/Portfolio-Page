import React from 'react';
import { render } from '@testing-library/react';
import { FormPage } from '.';

describe('Form Component', () => {
  it('should render', () => {
    const { container } = render(<FormPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
