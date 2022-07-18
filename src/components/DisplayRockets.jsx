import React from 'react';
import PropTypes from 'prop-types';

const DisplayRockets = (props) => {
  const {
    rocketId, rocketName, rocketType, flickrImage,
  } = props;

  DisplayRockets.propTypes = {
    rocketId: PropTypes.string.isRequired,
    rocketName: PropTypes.string.isRequired,
    rocketType: PropTypes.string.isRequired,
    flickrImage: PropTypes.string.isRequired,
  };

  return (
    <div>
      rockets
      <span>{rocketId}</span>
      <h1>{rocketName}</h1>
      <p>{rocketType}</p>
      <img src={flickrImage} alt={rocketName} />
      <hr />
    </div>
  );
};

export default DisplayRockets;
