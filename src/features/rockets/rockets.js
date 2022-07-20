import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllRockets,
  getRocketsStatus,
  getRocketsError,
  fetchRockets,
  reserveRocket,
} from './rocketSlice';
import DisplayRockets from '../../components/DisplayRockets';
import './rockets.css';

const RocketsIndex = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(selectAllRockets);
  const rocketStatus = useSelector(getRocketsStatus);
  const error = useSelector(getRocketsError);

  const handleReserveRocket = (id) => dispatch(reserveRocket(id));

  useEffect(() => {
    if (rocketStatus === 'idle') {
      dispatch(fetchRockets());
    }
  }, [rocketStatus, dispatch]);

  let contentToDisplay = '';
  if (rocketStatus === 'loading') {
    contentToDisplay = <h2>Loading...</h2>;
  } else if (rocketStatus === 'succeeded') {
    contentToDisplay = rockets.map((data, id) => (
      <div key={data.id}>
        <DisplayRockets
          className={id % 2 === 0 ? 'rocket2' : 'rocket1'}
          rocketId={data.id}
          rocketName={data.rocket_name}
          rocketType={data.rocket_type}
          flickrImage={data.flickr_images[0]}
          description={data.description}
          handleReserveRocket={handleReserveRocket}
          reserved={data.reserved}
        />
      </div>
    ));
  } else if (rocketStatus === 'failed') {
    contentToDisplay = <p>{error}</p>;
  }

  return <>{contentToDisplay}</>;
};

export default RocketsIndex;
