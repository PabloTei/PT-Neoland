import './CardMovie.css';

const CardMovie = ({ movie }) => {
  return (
    <figure className="poster">
      <img src={movie.images['Poster Art'].url} alt={movie.title} />
      <h3>{movie.title}</h3>
    </figure>
  );
};

export default CardMovie;
