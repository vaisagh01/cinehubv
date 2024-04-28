import { useState, useEffect } from "react";
import Movie from "../components/MovieCard";
import Filter from "../components/Filter";
import {motion} from 'framer-motion'
import Sort from "../components/Sort";
import SearchInput from "../components/SearchInput";
import { CloudFog, ChevronRight, ChevronLeft } from "lucide-react";
import { NavLink } from 'react-router-dom'


export default function Home() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredlist, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [page, setPage] = useState(1);

  const API_KEY = `api_key=cc0e2f4b6a82284dfa9a47aae043d3b0`
  const API_URL = `https://api.themoviedb.org/3/movie/popular?${API_KEY}&language=en-US&page=`
  
  const fetchAllMovies = async () => {
    if(page >= 1){
      const response = await fetch(API_URL + `${page}`)
      const movie = await response.json();
      setAllMovies(movie.results)
    } else {
      setPage(1)
    }
  }
  useEffect(() => {
    fetchAllMovies()
  },[page])
 
  return (
    <div className="page-bg overflow-auto hide-scroll px-2 ">
      <div className="flex items-center">
        <SearchInput setFiltered={setFiltered} allShows={allMovies}/>
        <Filter allShows = {allMovies} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
        <div className="flex gap-1 items-center justify-center">
          <button className="text-slate-300 rounded-xl"  onClick={()=>{setPage(page - 1)}}><ChevronLeft /></button>
          <p className="text-slate-300 rounded-xl" >{page}</p>
          <button className="text-slate-300 rounded-xl" onClick={()=>{setPage(page + 1)}}><ChevronRight /></button>
        </div>
      </div>
      <motion.div 
        animate={{y: 20, opacity: 1}}
        initial={{opacity:0}} 
        layout className="rounded-md scroll-animation grid grid-cols-6">
          {filteredlist.map(movie =>{
            return <Movie key={movie.id} movie={movie}/>
          })}
      </motion.div>
    </div>
)
}
