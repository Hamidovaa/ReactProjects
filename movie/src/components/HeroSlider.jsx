import React, { useEffect } from 'react';
import { useState, useRef } from 'react'
import { Swiper, SwiperSlide, } from "swiper/react";
import apiConfig from '../api/apiConfig';
import './sass/heroSlider.scss'
import { Link } from 'react-router-dom';
import Modal, { ModalContent } from './modal/Modal';

// import Autoplay from 'swiper'

const HeroSlider = () => {
 
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    fetch(`${apiConfig.baseUrl}movie/popular?api_key=${apiConfig.apiKey}`)
    .then((m) => m.json())
    .then((m) => setMovies(m));

  }, [])


  return (
    
    <>
    <Swiper
     
      loop={true}
      autoplay={{ delay: 3000 }}
      slidesPerView={1}
      spaceBetween={0}
    >
      {movies.length !== 0 ? (
        movies.results.map((movie,i) => (
          <SwiperSlide key={movie.id}>
            <HeroSlideItem  movie={movie} />
          </SwiperSlide>

        ))
      ) : (
        <>

            <div role="status" className="max-w-sm animate-pulse">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              <span className="sr-only">Loading...</span>
            </div>

            <div role="status" className="max-w-sm animate-pulse">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              <span className="sr-only">Loading...</span>
            </div>

            <div role="status" className="max-w-sm animate-pulse">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              <span className="sr-only">Loading...</span>
            </div>

            <div role="status" className="max-w-sm animate-pulse">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
          </>
        )}
      </Swiper>
      
      {movies.length !== 0
        ? movies.results.map((item) => <TrailerModal key={item.id} item={item} />)
        : ""


}


    </>
  );
};

const HeroSlideItem = ({ movie, type }) => {

  const setMovieActive = async () => {
    const modal = document.querySelector(`#modal_${movie.id}`);
    const videoLink = `${apiConfig.baseUrl}movie/${movie.id}/videos?api_key=${apiConfig.apiKey}`;
    const videoResult = await (await fetch(videoLink)).json();
    // console.log(videoResult);
    if (videoResult.results.length > 0) {
        const videoSrc =
          "https://www.youtube.com/embed/" + videoResult.results[0].key;
        modal.querySelector(".modal-content > iframe").setAttribute("src", videoSrc);
      } else {
        modal.querySelector(".modal-content").innerHTML = "No Trailer";
      }
      modal.classList.toggle("active");
  };


  

  return (
    <>
     <div
      className="slider-item"
      style={{
        backgroundImage: `url(${apiConfig.originalImage(movie.backdrop_path)})`,
      }}
    >
      <div className="slider-content">
        <h4>{movie.original_title}</h4>



        <div className="slider-button">
            <button onClick={setMovieActive}>Trailer</button>
          <Link to={`/movie/${movie.id}`}>Detail</Link>
        </div>
      </div>
    </div>
    </>
  );
};


const TrailerModal = (props) => {
  const iframeRef = useRef(null);
  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${props.item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          src=""
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};


export default HeroSlider


