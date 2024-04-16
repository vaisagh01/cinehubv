import React, { useEffect } from 'react'
import {motion} from 'framer-motion';

export default function Filter({setActiveGenre, activeGenre, setFiltered, allShows}) {
    console.log(activeGenre);
    useEffect(()=>{
        if(activeGenre == 0){
            setFiltered(allShows);
            return 
        }
        const filtered = allShows.filter((movie) => movie.genre_ids.includes(activeGenre))
        setFiltered(filtered)
    },[allShows])
    
  
    return (
    <div className='flex gap-3 p-3 hide-scroll overflow-auto w-[70%]  border-b-2 border-slate-700'>
        <motion.button whileHover={{scale:1.09, transition:{duration:0.1}}} whileTap={{scale:1.2}} className={activeGenre === 0 ? "active-genre" : "inactive"}  onClick={()=>{setActiveGenre(0)}}>All</motion.button>
        <motion.button whileHover={{scale:1.09, transition:{duration:0.1}}} whileTap={{scale:1.2}} className={activeGenre === 12 ? "active-genre" : "inactive"}  onClick={()=>{setActiveGenre(12)}}>Action</motion.button>
        <motion.button whileHover={{scale:1.09, transition:{duration:0.1}}} whileTap={{scale:1.2}} className={activeGenre === 35 ? "active-genre" : "inactive"}  onClick={()=>{setActiveGenre(35)}}>Comedy</motion.button>
        <motion.button whileHover={{scale:1.09, transition:{duration:0.1}}} whileTap={{scale:1.2}} className={activeGenre === 10749 ? "active-genre" : "inactive"}  onClick={()=>{setActiveGenre(10749)}}>Romance</motion.button>
    </div>
  )
}
