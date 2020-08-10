import { getWeatherImage } from '.';

describe('getWeatherImage function', () => {
  it('should return loading if no imageCode', () => {
    const result = getWeatherImage();
    expect(result).toBe('loading...');
  });

  it('should return snowing for imageCode 13d', () => {
    // set up section
    const imageCode = '13d';

    // call the function with whatever you're testing
    const result = getWeatherImage(imageCode);

    // assert on the result
    expect(result).toBe('snowing.png');
  });

  it('should return clearday for imageCode 01d', () => {
    // set up section
    const imageCode = '01d';

    // call the function with whatever you're testing
    const result = getWeatherImage(imageCode);

    // assert on the result
    expect(result).toBe('clearDay.png');
  });
});
