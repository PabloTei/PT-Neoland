import './Peliculas.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

import CardMovie from '../../components/CardMovie/CardMovie';

const Peliculas = () => {
  const [data, setData] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);

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
        setLoaded(true);
      });
  }, [filterMovies]);

  return (
    <main>
      <h2 className="peliculas">Popular Movies</h2>
      <div className="grid-peliculas">
        {loaded ? (
          filterMovies.map((movie) => <CardMovie key={movie.title} movie={movie} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
};

export default Peliculas;
