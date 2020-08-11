import React from 'react';
import { render } from '@testing-library/react';
import { CVPage } from '.';

describe('CV Page Component', () => {
  it('should render', () => {
    const { container } = render(<CVPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
