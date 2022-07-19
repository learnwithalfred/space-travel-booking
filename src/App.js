import { Routes, Route } from 'react-router-dom';
import NavHeader from './components/header/header';
import Missions from './features/missions/missions';
import RocketsIndex from './features/rockets/rockets';
import ProfilePage from './features/profile/profile';

function App() {
  return (
    <>
      <NavHeader />
      <Routes>
        <Route exact path="/" element={<RocketsIndex />} />
        <Route exact path="profile" element={<ProfilePage />} />
        <Route exact path="missions" element={<Missions />} />
      </Routes>
    </>
  );
}
export default App;
