import './Inicio.css';

import { NavLink } from 'react-router-dom';

const Inicio = () => {
  return (
    <main className="inicio">
      <h2>Popular Titles</h2>
      <div>
        <NavLink to="/peliculas">Peliculas</NavLink>
        <NavLink to="/series">Series</NavLink>
      </div>
    </main>
  );
};

export default Inicio;
