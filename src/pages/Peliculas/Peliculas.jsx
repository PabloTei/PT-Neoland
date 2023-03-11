import './Peliculas.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

import CardMovie from '../../components/CardMovie/CardMovie';

const Peliculas = () => {
  const [data, setData] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
      )
      .then((res) => {
        setData(res.data.entries);
        const arrayFilter = data.filter(
          (movie) => movie.programType === 'movie' && movie.releaseYear >= 2010,
        );
        const arrayFilterMovieLess = arrayFilter.slice(0, 20);
        const copyMovies = [...arrayFilterMovieLess];
        const moviesSort = copyMovies.sort((a, b) => (a.title < b.title ? -1 : +1));
        setFilterMovies(moviesSort);
      });
  }, [filterMovies]);

  return (
    <main>
      <h2>Popular Movies</h2>
      <div className="grid-peliculas">
        {filterMovies.map((movie) => (
          <CardMovie key={movie.title} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default Peliculas;
