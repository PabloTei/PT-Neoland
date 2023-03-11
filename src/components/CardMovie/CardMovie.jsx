import './CardMovie.css';

const CardMovie = ({ movie }) => {
  return (
    <figure className="poster">
      <img src={movie.images['Poster Art'].url} alt={movie.title} />
      <h2>{movie.title}</h2>
    </figure>
  );
};

export default CardMovie;
