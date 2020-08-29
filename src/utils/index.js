import clearDay from '../tokens/weatherImages/clearDay.png';
import clearNight from '../tokens/weatherImages/clearNight.png';
import fog from '../tokens/weatherImages/fog.png';
import heavyClouds from '../tokens/weatherImages/heavyClouds.png';
import heavyRain from '../tokens/weatherImages/heavyRain.png';
import lightCloudsDay from '../tokens/weatherImages/lightCloudsDay.png';
import lightCloudsNight from '../tokens/weatherImages/lightCloudsNight.png';
import scatterCloudsDay from '../tokens/weatherImages/scatterCloudsDay.png';
import scatterCloudsNight from '../tokens/weatherImages/scatterCloudsNight.png';
import slightRainDay from '../tokens/weatherImages/slightRainDay.png';
import slightRainNight from '../tokens/weatherImages/slightRainNight.png';
import snowing from '../tokens/weatherImages/snowing.png';
import thunderstorm from '../tokens/weatherImages/thunderstorm.png';

export const getWeatherImage = (imageCode) => {
  switch (imageCode) {
    case '01d':
      return clearDay;
    case '01n':
      return clearNight;
    case '02d':
      return lightCloudsDay;
    case '02n':
      return lightCloudsNight;
    case '03d':
      return scatterCloudsDay;
    case '03n':
      return scatterCloudsNight;
    case '04d':
    case '04n':
      return heavyClouds;
    case '09d':
      return slightRainDay;
    case '09n':
      return slightRainNight;
    case '10d':
    case '10n':
      return heavyRain;
    case '11d':
    case '11n':
      return thunderstorm;
    case '13d':
    case '13n':
      return snowing;
    case '50d':
    case '50n':
      return fog;
    default:
      return 'loading...';
  }
};

export const dateConverter = (timeStamp) => {
  const date = new Date(timeStamp * 1000);
  const formattedDate = date.toLocaleDateString('en-GB');
  return formattedDate;
};

export const timeConverter = (timeStamp) => {
  const date = new Date(timeStamp * 1000);
  const formattedTime = date.toLocaleTimeString('en-US');
  return formattedTime;
};
