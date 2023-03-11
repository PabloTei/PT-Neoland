import './Series.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

import CardSerie from '../../components/CardSerie/CardSerie';

const Series = () => {
  const [dataSerie, setDataSerie] = useState([]);
  const [filterSeries, setFilterSeries] = useState([]);

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
        const seriesSort = copySeries.sort((a, b) => (a.title < b.title ? -1: +1))
        setFilterSeries(seriesSort);
      });
  }, [filterSeries]);

  return (
    <main>
      <h2>Popular Series</h2>
      <div className="grid-peliculas">
        {filterSeries.map((serie) => (
          <CardSerie key={serie.title} serie={serie} />
        ))}
      </div>
    </main>
  );
};

export default Series;
