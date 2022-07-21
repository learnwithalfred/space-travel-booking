import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { getThemeColor } from '../features/theme/themeSlice';

const DisplayRockets = (props) => {
  const {
    rocketId,
    rocketName,
    flickrImage,
    description,
    handleReserveRocket,
    reserved,
  } = props;

  const bgLight = useSelector(getThemeColor);
  const wrapperClass = 'container rocket border border-dark rounded-3 my-4 bg-opacity-75 shadow-sm';

  DisplayRockets.propTypes = {
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

  const changeColor = (bg) => (bg ? 'white' : 'black');
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
          <h1
            style={{
              color: changeColor(bgLight),
            }}
          >
            {rocketName}
          </h1>

          <p
            style={{
              fontSize: '0.9rem',
              color: changeColor(bgLight),
            }}
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
