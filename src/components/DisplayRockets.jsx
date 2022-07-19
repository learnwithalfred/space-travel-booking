import React from 'react';
import PropTypes from 'prop-types';

const DisplayRockets = (props) => {
  const {
    rocketId,
    rocketName,
    flickrImage,
    description,
    handleReserveRocket,
    reserved,
  } = props;

  DisplayRockets.propTypes = {
    rocketId: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    flickrImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleReserveRocket: PropTypes.func.isRequired,
    reserved: PropTypes.bool.isRequired,
  };

  function displayReservedText(currState) {
    return currState ? 'Reserve Rockets' : 'Cancel Reservation';
  }

  return (
    <div className="container">
      <div
        style={{
          display: 'flex',
          height: 200,
          margin: '2rem 0',
        }}
      >
        <div>
          <img
            style={{
              height: '90%',
              width: 250,
            }}
            src={flickrImage}
            alt={rocketName}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0 1rem',
          }}
        >
          <h1>{rocketName}</h1>
          <p
            style={{
              fontSize: '0.9rem',
            }}
          >
            {description}
          </p>
          <button
            onClick={() => handleReserveRocket(rocketId)}
            style={{
              width: 200,
            }}
            className="btn btn-primary"
            type="button"
          >
            {displayReservedText(reserved)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayRockets;
