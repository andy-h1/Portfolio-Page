import React from 'react';
import { render } from '@testing-library/react';
import { IdeaBoardPage } from '.';

describe('Form Component', () => {
  it('should render', () => {
    const { container } = render(<IdeaBoardPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
