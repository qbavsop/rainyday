const apiKey = 'API Key';

function convertDate(timestamp) {
  let a = new Date(timestamp * 1000);
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let time = `${date} ${month} ${hour}:${min < 10 ? '0' : ''}${min}`;
  return time;
}

export const Weather = {
  async getCurrentWeather(term) {
    const currentWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + term + "&appid=" + apiKey + "&lang=us&units=metric";
    try {
      let response = await fetch(currentWeatherUrl);
      if (response.ok) {
        let jsonResponse = await response.json();
        let currentWeather = {
          name: jsonResponse.name,
          country: jsonResponse.sys.country,
          id: jsonResponse.id,
          time: jsonResponse.dt,
          temp: jsonResponse.main.temp,
          pressure: jsonResponse.main.pressure,
          humidity: jsonResponse.main.humidity,
          wind: jsonResponse.wind.speed,
          desc: jsonResponse.weather[0].description,
          icon: jsonResponse.weather[0].icon,
          lat: jsonResponse.coord.lat,
          lon: jsonResponse.coord.lon
        }
        return currentWeather;
      } else {
        let currentWeather = {};
        return currentWeather;
      }
    } catch (error) {
      console.log(error);
    }
  },
  async getForecast(term) {

    const forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + term + "&appid=" + apiKey + "&lang=us&units=metric&cnt=16";
    try {
      let response = await fetch(forecastUrl);
      if (response.ok) {
        let jsonResponse = await response.json();
        // convert data to array format for chartjs
        let dataSnow = [];
        let dataRain = [];
        let dataTemp = [];
        let dataTime = [];
        for (let i = 0; i < jsonResponse.list.length; i++) {
          dataRain.push(jsonResponse.list[i].rain?jsonResponse.list[i].rain["3h"]: 0);
          dataSnow.push(jsonResponse.list[i].snow?jsonResponse.list[i].snow["3h"]: 0);
          dataTime.push(convertDate(jsonResponse.list[i].dt));
          dataTemp.push(jsonResponse.list[i].main.temp);
        }
        let forecastTimeStamps = {
          dataRain: dataRain,
          dataSnow: dataSnow,
          dataTime: dataTime,
          dataTemp: dataTemp
        }
        return forecastTimeStamps;
      }
      else {
        let forecastTimeStamps = {};
        return forecastTimeStamps;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
