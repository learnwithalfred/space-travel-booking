/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NavHeader from './components/header';
import Missions from './features/missions/missions';
import RocketsIndex from './features/rockets/rockets';
import ProfilePage from './features/profile/profile';
import './index.css';
import { getThemeColor, changeColor } from './features/theme/themeSlice';

function App() {
  const dispatch = useDispatch();

  const bgLight = useSelector(getThemeColor);

  function handleBackgroundColor(curBg) {
    return curBg ? 'black' : 'white';
  }

  function handleBGChange(bg) {
    dispatch(changeColor(bg));
  }

  return (
    <div
      style={{
        backgroundColor: `${handleBackgroundColor(bgLight)}`,
        minHeight: '100vh',
      }}
    >
      <NavHeader handleBGChange={handleBGChange} />

      <Routes>
        <Route exact path="/" element={<RocketsIndex />} />
        <Route exact path="profile" element={<ProfilePage />} />
        <Route exact path="missions" element={<Missions />} />
      </Routes>
    </div>
  );
}
export default App;
