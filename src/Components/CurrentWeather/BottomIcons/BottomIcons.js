import React from 'react';
import './BottomIcons.css'

export class PressureIcon extends React.Component {
  render() {
    return (
      <figure>
        <svg version="1.1"
           width="30px" height="30px" viewBox="0 0 30 30">
           <line className="footer-icon" x1="14.75" y1="3.061" x2="14.75" y2="23.084"/>
           <line className="footer-icon" x1="14.75" y1="23.084" x2="8.583" y2="15.939"/>
           <line className="footer-icon" x1="20.083" y1="15.939" x2="14.75" y2="23.084"/>
           <line className="footer-icon" x1="8.083" y1="27.556" x2="21.083" y2="27.556"/>
           <line className="footer-icon-animation" x1="11.25" y1="4.155" x2="11.25" y2="13.559"/>
           <line className="footer-icon-animation" x1="22.75" y1="18.75" x2="18.75" y2="24.125"/>
        </svg>
      </figure>
    )}
}

export class HumidityIcon extends React.Component {
  render() {
    return (
      <figure>
        <svg version="1.1"
           width="30px" height="30px" viewBox="0 0 30 30">
            <path className="footer-icon" d="M24.924,18.064c0,5.502-4.46,8.504-9.962,8.504
          S5,23.566,5,18.064S14.962,3,14.962,3S24.924,12.563,24.924,18.064z"/>
            <path className="footer-icon-animation" d="M20.979,16.096c0,0,2.459,6.875-6.017,6.875"
          />
        </svg>
      </figure>
    )}
}

export class WindSpeedIcon extends React.Component {
  render() {
    return (
      <figure>
        <svg version="1.1"
           width="30px" height="30px" viewBox="0 0 30 30">
            <path className="footer-icon" d="M22.31,8.583"/>
            <path className="footer-icon" d="M6.809,13.25h10.249
          c2.899,0,5.25-2.351,5.25-5.249c0-2.899-2.35-5.249-5.25-5.249"/>
            <path className="footer-icon" d="M1.31,16.749h22.132
          c2.899,0,5.249,2.351,5.249,5.249c0,2.899-2.35,5.25-5.249,5.25"/>
            <line className="footer-icon-animation" x1="9.81" y1="20.442" x2="22.307" y2="20.442"/>
            <line className="footer-icon-animation" x1="14.558" y1="9.275" x2="3.31" y2="9.275"/>
        </svg>
      </figure>
    )}
}
