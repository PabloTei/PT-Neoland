import './CardSerie.css';

const CardSerie = ({ serie }) => {
  return (
    <figure className="poster">
      <img src={serie.images['Poster Art'].url} alt={serie.title} />
      <h2>{serie.title}</h2>
    </figure>
  );
};

export default CardSerie;
