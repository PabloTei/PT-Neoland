import './Series.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

import CardSerie from '../../components/CardSerie/CardSerie';

const Series = () => {
  const [dataSerie, setDataSerie] = useState([]);
  const [filterSeries, setFilterSeries] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
      )
      .then((res) => {
        setDataSerie(res.data.entries);
        const arrayFilterSerie = dataSerie.filter(
          (serie) => serie.programType === 'series' && serie.releaseYear >= 2010,
        );
        const arrayFilterSerieLess = arrayFilterSerie.slice(0, 20);
        const copySeries = [...arrayFilterSerieLess];
        const seriesSort = copySeries.sort((a, b) => (a.title < b.title ? -1 : +1));
        setFilterSeries(seriesSort);
        setLoaded(true);
      });
  }, [filterSeries]);

  return (
    <main>
      <h2 className="series">Popular Series</h2>
      <div className="grid-peliculas">
        {loaded ? (
          filterSeries.map((serie) => (
            <div key={serie.title}>
              <CardSerie serie={serie} />
              <button onClick={(ev) => (ev.target.nextSibling.open = true)}>{serie.title}</button>
              <dialog>
                <h3>{serie.title}</h3>
                <button onClick={(ev) => (ev.target.parentNode.open = false) }>X</button>
              </dialog>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
};

export default Series;
