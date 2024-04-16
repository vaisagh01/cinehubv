import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion';

export default function Sort({setActiveGenre, activeGenre, setFiltered, allShows}) {
    const [isPopular, setIsPopular] = useState(false)
    const [isRated, setIsRated] = useState(false)
    const [isLatest, setIsLatest] = useState(false)
    
    return (
    <div className='p-3 hide-scroll flex justify-evenly w-[30%] overflow-auto border-r-2 border-b-2 border-slate-700'>
        <motion.button whileHover={{scale:1.09, transition:{duration:0.1}}} whileTap={{scale:1.2}} className={isPopular ? 'sort-by' : 'inactive'}  onClick={()=>{setIsPopular(!isPopular)}}>Popularity</motion.button>
        <motion.button whileHover={{scale:1.09, transition:{duration:0.1}}} whileTap={{scale:1.2}} className={isRated ? 'sort-by' : 'inactive'}  onClick={()=>{setIsRated(!isRated)}}>Rating</motion.button>
        <motion.button whileHover={{scale:1.09, transition:{duration:0.1}}} whileTap={{scale:1.2}} className={isLatest ? 'sort-by' : 'inactive'}  onClick={()=>{setIsLatest(!isLatest)}}>Latest</motion.button>
    </div>
  )
}
