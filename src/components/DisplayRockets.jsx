import React from 'react';
import PropTypes from 'prop-types';

const DisplayRockets = (props) => {
  const { rocketName, flickrImage, description } = props;

  DisplayRockets.propTypes = {
    rocketName: PropTypes.string.isRequired,
    flickrImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

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
            style={{
              width: 150,
            }}
            className="btn btn-primary"
            type="button"
          >
            Reserve Rockets
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayRockets;
