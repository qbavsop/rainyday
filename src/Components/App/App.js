import React from 'react';
import './App.css';
import SearchLocation from '../SearchLocation/SearchLocation';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import PhotoSlider from '../PhotoSlider/PhotoSlider';
import Forecast from '../Forecast/Forecast';
import { Weather } from '../../util/OpenWeatherMap';
import { capitalize } from '../../util/helpers';
import weatherLogo from './logo.svg'


class App extends React.Component {
  state = {
    currentWeather: {},
    forecastTimeStamps: [],
  };

  search = (term) => {
    Weather
    .getForecast(term)
    .then((forecastTimeStamps) => {
      this.setState({ forecastTimeStamps });
    })
    .then(
      Weather
      .getCurrentWeather(term)
      .then((currentWeather) => {
        this.setState({ currentWeather });
      }))
  }


  componentWillMount() {
    // Checking if any location is given in URL, and perform search if necessary
    const city = decodeURI(window.location.pathname.slice(1));
    if (city !== '') {
      console.log(`Search for ${city}`);
      window.document.title = `${capitalize(city)} / Weather Forecast`;
      return this.search(city);
    }
  }

  render() {
      let siteLogo;
      let widgetsCmp = '';
      let photoSet = '';

      // 1. No data avaliable for given parameter, API returns ex 404
      if (Object.keys(this.state.forecastTimeStamps).length === 0 && this.props.match.path.slice(1) !== '') {
        photoSet = "00";
        widgetsCmp = (
          <p className="app-info">Sorry, no weather data for {capitalize(window.location.pathname.slice(1))} avaliable</p>
        )
      }
      //2. Home
      else if (Object.keys(this.state.forecastTimeStamps).length === 0 && this.props.match.path.slice(1) === '') {
        siteLogo = (
          <header><img src={weatherLogo} alt="Weather"/></header>
        )
        widgetsCmp = (
          <p className="app-info">All weather data is provided by openweathermap.org</p>
        )
      }
      //3. Data supplied, render layout
      else {
        widgetsCmp = (
          <section className="app-panels">
          <CurrentWeather currentWeather={this.state.currentWeather} />
          <Forecast forecast={this.state.forecastTimeStamps} />
          </section>
        )
        photoSet = this.state.currentWeather.icon;
      }

    return (
      <div className="app">
        <PhotoSlider photoSet={photoSet} />
        <div className="app-container">
          {siteLogo}
          <SearchLocation onSearch={this.search} />
          {widgetsCmp}
        </div>
      </div>
    );
  }
}

export default App;
