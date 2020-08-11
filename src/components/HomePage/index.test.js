import React from 'react';
import { render } from '@testing-library/react';
import { HomePage } from '.';

describe('Home Page Component', () => {
  it('shoulder render', () => {
    const { container } = render(<HomePage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
