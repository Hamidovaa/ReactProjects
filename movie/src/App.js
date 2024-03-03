
import { useState } from 'react';
import './App.scss';
import { ThemeProvider } from './components/context/ThemeContext';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MyRouter from './routes/MyRouter';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import { searchMovies } from './components/MovieService';



function App() {


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
    <>
    <ThemeProvider>
    <Header/>
    <MyRouter/>
    <Footer/>
    </ThemeProvider>

   
  

    

    </>


  );
}



export default App;
