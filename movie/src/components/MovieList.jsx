import React from 'react';
import '../././components/sass/movie-list.scss'

const MovieList = ({ movies }) => {
  return (
    <div className='movie-list'>
      <ul className='search'>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;