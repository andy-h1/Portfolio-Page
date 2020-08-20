import React from 'react';
import { render } from '@testing-library/react';
import { Form } from '.';

describe('Form Component', () => {
  it('should render', () => {
    const { container } = render(<Form />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
