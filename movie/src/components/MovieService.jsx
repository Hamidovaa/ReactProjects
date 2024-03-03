import { useEffect, useRef } from "react";
import apiConfig from "../api/apiConfig";

const API_URL = 'https://api.themoviedb.org/3/';

export const searchMovies = async (searchTerm) => {

    

  try {
    
    const response = await fetch(`${API_URL}search/movie?api_key=${apiConfig.apiKey}&query=${searchTerm}`);

    if (!response.ok) {
      throw new Error('API isteği başarısız');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('API isteği başarısız: ', error);
    throw error;
  }
};