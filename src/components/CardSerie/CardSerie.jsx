import './CardSerie.css';

const CardSerie = ({ serie }) => {
  return (
    <figure className="poster">
      <img src={serie.images['Poster Art'].url} alt={serie.title} />
      <h3>{serie.title}</h3>
    </figure>
  );
};

export default CardSerie;
