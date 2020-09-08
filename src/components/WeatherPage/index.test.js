import React from 'react';
import axiosMock from 'axios';
import { render, cleanup, waitFor } from '@testing-library/react';
import { WeatherPage } from '.';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

jest.mock('axios');

const mockData = {
  dt: 1598656029,
  main: {
    temp: 27.9,
    feels_like: 25.9
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
  ],
  wind: {
    speed: 5.0
  }
};

describe('Weather Page Component', () => {
  it('should render', () => {
    const { container } = render(<WeatherPage />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should fetch and return weather data', async () => {
    axiosMock.get.mockResolvedValue({ data: mockData });
    const { getByTestId } = render(<WeatherPage />);
    await waitFor(() => expect(getByTestId('weatherTracker')));
  });
});

// mock an API call to OpenWeather API
// fake data based on API - does it need to be in the same format?
// render the data
//  expect(getByTestId('loading')).toHaveTextContent('Loading...')
