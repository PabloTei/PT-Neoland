import './CardSerie.css';

const CardSerie = ({ serie }) => {
  return (
    <figure className="poster">
      <img src={serie.images['Poster Art'].url} alt={serie.title} />
    </figure>
  );
};

export default CardSerie;
