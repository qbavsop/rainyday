import React from 'react';
import PropTypes from 'prop-types';
import './CurrentWeather.css';
import {PressureIcon} from './BottomIcons/BottomIcons';
import {HumidityIcon} from './BottomIcons/BottomIcons';
import {WindSpeedIcon} from './BottomIcons/BottomIcons';
import * as WeatherIcons from './WeatherIcons/WeatherIcons';

class CurrentWeather extends React.Component {

  static propTypes = {
    currentWeather: PropTypes.shape({
      country: PropTypes.string,
      desc : PropTypes.string,
      humidity : PropTypes.number,
      icon : PropTypes.string,
      id : PropTypes.number,
      lat : PropTypes.number,
      lon : PropTypes.number,
      name : PropTypes.string,
      pressure : PropTypes.number,
      temp : PropTypes.number,
      time : PropTypes.number,
      wind : PropTypes.number
    })
  }

  convertDate = (timestamp) => {
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
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let time = `${date} ${month} ${year} ${hour}:${min < 10 ? '0' : ''}${min}`;
    return time;
  }

  // Render a proper animated Weather Icon

  renderIcon = () => {
    let WeatherIcon = WeatherIcons['Icon' + this.props.currentWeather.icon];
    return <WeatherIcon/>
  }

  render() {
    if (this.props.currentWeather.time) {
      return (
        <div className="current-weather">
          <header>
            <h1 className="current-weather__location">
              <a href={'https://www.google.com/maps/@' + this.props.currentWeather.lat + ',' + this.props.currentWeather.lon + ',10z'} target="_blank" title={`Show ${this.props.currentWeather.name} at GoogleMaps`}>{this.props.currentWeather.name}</a>
               &nbsp;| {this.props.currentWeather.country}</h1>
            <h3 className="current-weather__date">{this.convertDate(this.props.currentWeather.time)}</h3>
          </header>
          <section>
            <figure className="current-weather__icon">{this.renderIcon()}</figure>
            <div className="current-weather__temperature">{Math.round(this.props.currentWeather.temp)}
              &deg;C</div>
            <span className="current-weather__desc">{this.props.currentWeather.desc}</span>
          </section>
          <section className="current-weather-footer">
            <div>
              <PressureIcon/>
              <h4 className="current-weather-footer__title">Pressure</h4>
              <strong>{this.props.currentWeather.pressure}
                hPa</strong>
            </div>
            <div>
              <HumidityIcon/>
              <h4 className="current-weather-footer__title">Humidity</h4>
              <strong>{this.props.currentWeather.humidity}
                %</strong>
            </div>
            <div>
              <WindSpeedIcon/>
              <h4 className="current-weather-footer__title">Wind speed</h4>
              <strong>{this.props.currentWeather.wind}
                m/s</strong>
            </div>
          </section>
        </div>
      )
    } else {
      return null
    }
  }
}
export default CurrentWeather;
