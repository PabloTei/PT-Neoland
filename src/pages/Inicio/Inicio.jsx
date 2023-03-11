import './Inicio.css';

import { NavLink } from 'react-router-dom';

const Inicio = () => {
  return (
    <main className="inicio">
      <h2>Popular Titles</h2>
      <div>
        <figure className="container">
          <img
            src="https://res.cloudinary.com/depifliz3/image/upload/v1678557245/samples/Motos/placeholder_fhzfb3.png"
            alt="video"
          />
          <NavLink to="/peliculas">Popular Movies</NavLink>
        </figure>
        <figure>
          <img
            src="https://res.cloudinary.com/depifliz3/image/upload/v1678557245/samples/Motos/placeholder_fhzfb3.png"
            alt="video2"
          />
          <NavLink to="/series">Popular Series</NavLink>
        </figure>
      </div>
    </main>
  );
};

export default Inicio;
