import React from 'react'
import HeroSlider from '../components/HeroSlider'
import MovieGrid from '../components/movie-grid/MovieGrid'


const Home = () => {
  return (
    <div>
        <HeroSlider/>
        <MovieGrid type={'movie'}/>
        <MovieGrid type={'tv'}/>
        
    </div>
  )
}

export default Home