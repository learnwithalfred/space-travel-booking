import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';

const DisplayRockets = (props) => {
  const {
    className,
    rocketId,
    rocketName,
    flickrImage,
    description,
    handleReserveRocket,
    reserved,
  } = props;

  const wrapperClass = `container rocket border border-dark rounded-3 my-4 bg-opacity-75 shadow-sm ${className}`;

  DisplayRockets.propTypes = {
    className: PropTypes.string.isRequired,
    rocketId: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    flickrImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleReserveRocket: PropTypes.func.isRequired,
    reserved: PropTypes.bool.isRequired,
  };

  function displayReservedText(currState) {
    return currState ? 'Cancel Reservation' : 'Reserve Rockets';
  }

  function handleReservedButtonClass(currState) {
    return currState ? 'btn btn-outline-danger' : 'btn btn-success';
  }

  return (
    <div className={wrapperClass}>
      <div className="rocket-wrapper">
        <div>
          <img
            className="rocket-image rounded-3"
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
          <h1 className="text-white">{rocketName}</h1>

          <p
            style={{
              fontSize: '0.9rem',
            }}
            className="text-white"
          >
            {reserved && (
              <Badge
                style={{
                  marginRight: 10,
                }}
                bg="info"
              >
                Reserved
              </Badge>
            )}
            {description}
          </p>
          <button
            onClick={() => handleReserveRocket(rocketId)}
            style={{
              width: 200,
            }}
            className={handleReservedButtonClass(reserved)}
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
