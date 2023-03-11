import './Inicio.css';

import { NavLink } from 'react-router-dom';

const Inicio = () => {
  return (
    <div>
      <NavLink to="/peliculas">Peliculas</NavLink>
      <NavLink to="/series">Series</NavLink>
    </div>
  );
};

export default Inicio;
