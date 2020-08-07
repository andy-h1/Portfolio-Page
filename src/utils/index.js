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

export const ChangeWeatherImage = () => {
  switch (image) {
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
      return 'loading';
  }
};

// if icon is 01d then display - clearSkyDay.png
// icon list
// 01d - clear sky day
// 01n - clear sky night
// 02d - few clouds day
// 02n - few clouds night
// 03d - scattered clouds day
// 03n - scattered clouds night
// 04d/04n - heavy clouds day/night
// 09d - slight rain day
// 09n - slight rain night
// 10d - rainy day
// 10n - rainy night
// 11d/11n - thunderstorm
// 13d/13n - snowing
// 50d/50n - fog
