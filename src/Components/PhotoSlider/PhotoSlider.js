import React from 'react';
import PropTypes from 'prop-types';
import './PhotoSlider.css';
import myData from './data/data.json';

class PhotoSlider extends React.Component {

  static propTypes = {
    photoSet: PropTypes.string
  }

  render() {
    let photoSet;
    this.props.photoSet ? photoSet=this.props.photoSet : photoSet="00";
    //console.log(photoSet);
    return (
      <div className="photoslider">
        <ul>
          <li className="photoslider__elem" style={{backgroundImage: 'url(' + myData.photoslider[photoSet].photos[0].url + ')'}}></li>
          <li className="photoslider__elem" style={{backgroundImage: 'url(' + myData.photoslider[photoSet].photos[1].url + ')'}}></li>
          <li className="photoslider__elem" style={{backgroundImage: 'url(' + myData.photoslider[photoSet].photos[2].url + ')'}}></li>
        </ul>
      </div>
    )
  }
}

export default PhotoSlider;
