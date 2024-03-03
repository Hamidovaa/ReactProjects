import React, { useEffect, useState } from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import Button from '../Button'
import { useTheme } from '../context/ThemeContext'
import SearchBar from '../SearchBar'
import { searchMovies } from '../MovieService'
import MovieList from '../MovieList'


const Header = () => {
    const {theme}=useTheme();




    const [movies, setMovies] = useState([]); 

  const searchMoviesHandler = async(searchTerm) => {
    try {
      const results = await searchMovies(searchTerm);
      setMovies(results);
    } catch (error) {
      console.error('API isteği başarısız: ', error);
    }
  };

    
  return (


    
    <header className={`app ${theme==="dark"? "light":"dark"}`}>

    
        
        <div className="boxes">
            <div className="logo">
                <h1>LOGO</h1>
            </div>

            <ul>
                <li>
                 <Button></Button>
                </li>
                <li>
                   
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/tw-show'}>Tv-Show</Link>
                </li>
                <li>
                    <Link to={'/catalog'}>Catalog</Link>
                </li>
                <li>
                    <div>
                    <SearchBar onSearch={searchMoviesHandler} />
                    <MovieList movies={movies} />
                    </div>
                </li>
            </ul>

        </div>
    </header>
  )
}

export default Header