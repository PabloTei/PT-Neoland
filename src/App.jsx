import './App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Inicio from './pages/Inicio/Inicio';
import Notfound from './pages/Notfound/Notfound';
import Peliculas from './pages/Peliculas/Peliculas';
import Series from './pages/Series/Series';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/series" element={<Series />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
