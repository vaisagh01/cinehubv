import { useState, useEffect } from "react";
import Movie from "../components/MovieCard";
import Filter from "../components/Filter";
import {motion} from 'framer-motion'
import Landing from "../components/Landing";
import { ChevronRight,ChevronLeft } from 'lucide-react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MovieSlider from "./MovieSlider";

export default function Movies() {
  const [allshows, setAllShows] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)

  const API_KEY = "api_key=cc0e2f4b6a82284dfa9a47aae043d3b0"
  const url="https://api.themoviedb.org/3"
  const API_URL_TV = url + "/discover/tv?&" + API_KEY
  const API_URL_Movies = url + "/discover/movie?&" + API_KEY
  
  const fetchAllShow = async () => {
    const movie = await fetch(API_URL_Movies)
    const movieShows = await movie.json()
    setAllShows(movieShows.results)
  }
  
  useEffect(() => {
    fetchAllShow()
  },[])

  return (
    <div>
      <div className="page-bg">
      <Carousel showThumbs={false} className="rounded-lg" autoPlay infiniteLoop={true} swipeable emulateTouch useKeyboardArrows interval={4000} showStatus={false} showIndicators={false} swipeScrollTolerance={10}  >
        {allshows.map(movie => {return <MovieSlider key={movie.id} movie={movie}/>})}
      </Carousel>
    </div>
    <div className="page-bg">
      <Carousel showThumbs={false} className="rounded-lg" autoPlay infiniteLoop={true} swipeable emulateTouch useKeyboardArrows interval={4000} showStatus={false} showIndicators={false} swipeScrollTolerance={10}  >
        {allshows.map(movie => {return <MovieSlider key={movie.id} movie={movie}/>})}
      </Carousel>
    </div>
    </div>
)
}
