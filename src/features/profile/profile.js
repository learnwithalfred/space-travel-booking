import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  myReservedRockets,
  getReservedRockets,
  getRocketsStatus,
} from '../rockets/rocketSlice';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(getReservedRockets);
  const rocketStatus = useSelector(getRocketsStatus);

  useEffect(() => {
    dispatch(myReservedRockets());
  }, [rocketStatus, dispatch]);

  let renderReserved = '';
  if (rockets.length) {
    renderReserved = rockets.map((data) => (
      <li
        key={data.id}
        className="list-group-item d-flex justify-content-between align-items-start"
      >
        <span>{data.rocket_name}</span>

        <a
          className="btn btn-link"
          href={data.wikipedia}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </li>
    ));
  }

  return (
    <div className="container my-4">
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-2 text-dark bg-light rounded-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              tempore nesciunt quos illo asperiores aspernatur fugit maxime
              saepe nostrum natus. Eligendi, omnis libero!
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-2 rounded-3">
            <h2>My Rockets</h2>
            <ul className="list-group">{renderReserved}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
