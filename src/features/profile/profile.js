import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReservedMissions } from '../missions/missionsSlice';
import {
  myReservedRockets,
  getReservedRockets,
  getRocketsStatus,
} from '../rockets/rocketSlice';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(getReservedRockets);
  const rocketStatus = useSelector(getRocketsStatus);
  const missions = useSelector(getReservedMissions);

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

  const myMissions = missions.map((data) => (
    <li
      key={data.id}
      className="list-group-item d-flex justify-content-between align-items-start"
    >
      <span>{data.mission_name}</span>
    </li>
  ));

  return (
    <div className="container my-4">
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-2 text-dark rounded-3">
            <h2 className="text-left">My Missions</h2>
            <ul className="list-group">{myMissions}</ul>
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
