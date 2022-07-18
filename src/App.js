import { Routes, Route } from 'react-router-dom';
import Counter from './features/counter/counter';
import Missions from './features/missions/missions';
import RocketsIndex from './features/rockets/rockets';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<RocketsIndex />} />
      <Route exact path="counter" element={<Counter />} />
      <Route exact path="missions" element={<Missions />} />
    </Routes>
  );
}
export default App;
