import { Routes, Route } from 'react-router-dom';
import Counter from './features/counter/counter';
import Missions from './features/missions/missions';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Missions />} />
      <Route exact path="counter" element={<Counter />} />
    </Routes>
  );
}
export default App;
