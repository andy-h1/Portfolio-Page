import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HomePage } from '.';

describe('Home Page Component', () => {
  it('shoulder render', () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
