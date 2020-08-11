import React from 'react';
import { render } from '@testing-library/react';
import { ProjectList } from '.';

describe('Project List Component', () => {
  it('should render', () => {
    const { container } = render(<ProjectList />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
