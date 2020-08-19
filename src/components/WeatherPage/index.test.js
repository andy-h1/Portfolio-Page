import React from 'react';
import axiosMock from 'axios';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { WeatherPage } from '.';

afterEach(cleanup);

jest.mock('axios');

const mockData = {
  main: {
    temp: 27.9
  },
  name: 'London',
  sys: {
    country: 'GB'
  },
  weather: [
    {
      description: 'few clouds',
      icon: '02d',
      main: 'Clouds'
    }
  ]
};

describe('Weather Page Component', () => {
  it('should render', () => {
    const { container } = render(<WeatherPage />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should fetch and return weather data', async () => {
    axiosMock.get.mockResolvedValue(mockData);
    const { getByTestId } = render(<WeatherPage />);
    await waitForElement(() => expect(getByTestId('resolved')));
  });
});

// mock an API call to OpenWeather API
// fake data based on API - does it need to be in the same format?
// render the data
//  expect(getByTestId('loading')).toHaveTextContent('Loading...')
