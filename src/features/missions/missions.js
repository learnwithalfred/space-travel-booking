import React from 'react';
import { Link } from 'react-router-dom';

const Missions = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/counter">Counter</Link>
    <div>Missions page goes here</div>
  </div>
);

export default Missions;
