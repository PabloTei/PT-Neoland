import './Peliculas.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

const Peliculas = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
      )
      .then((res) => {
        setData(res.data.entries);
      });
  }, []);

  return (
    <main>
      <h2>Popular Movies</h2>
      {data.map((movie) => (
        <h3 key={movie.title}>{movie.title}</h3>
      ))}
    </main>
  );
};

export default Peliculas;
