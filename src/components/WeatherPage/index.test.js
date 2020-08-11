import React from 'react';
import { render } from '@testing-library/react';
import { WeatherPage } from '.';

describe('Weather Page Component', () => {
  it('should render', () => {
    const { container } = render(<WeatherPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
