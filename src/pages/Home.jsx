import { useState, useEffect } from "react";
import Movie from "../components/MovieCard";
import Filter from "../components/Filter";
import {motion} from 'framer-motion'
import Sort from "../components/Sort";
import SearchInput from "../components/SearchInput";
import { CloudFog } from "lucide-react";

export default function Home() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredlist, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);


  const API_KEY = "api_key=cc0e2f4b6a82284dfa9a47aae043d3b0"
  const url="https://api.themoviedb.org/3"
  const API_URL = url + "/discover/movie?&" + API_KEY
  const fetchAllMovies = async () => {
      const response = await fetch(API_URL)
      const movie = await response.json();
      setAllMovies(movie.results)
  }
  useEffect(() => {
    fetchAllMovies()
  },[])
  return (
    <div className="page-bg overflow-auto hide-scroll px-2 ">
      <div className="flex items-center">
        <SearchInput setFiltered={setFiltered} allShows={allMovies}/>
        <Filter allShows = {allMovies} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
      </div>
      <motion.div 
        animate={{y: 20, opacity: 1}}
        initial={{opacity:0}} 
        layout className="rounded-md scroll-animation grid grid-cols-5">
          {filteredlist.map(movie =>{
            return <Movie key={movie.id} movie={movie} />
          })}
      </motion.div>
    </div>
)
}
