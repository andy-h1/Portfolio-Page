import React from 'react';
import { render } from '@testing-library/react';
import { WeatherTracker } from '.';

const props = ({
  city: 'London',
  country: 'England',
  image: '01d',
  imgAlt: 'sunny',
  weatherDesc: 'clear sky',
  weatherTemp: 34
});

describe('Weather Tracker Component', () => {
  it('should render', () => {
    const { container } = render(<WeatherTracker {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
