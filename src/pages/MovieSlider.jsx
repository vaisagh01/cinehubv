import React from 'react'
import {motion} from 'framer-motion'

export default function MovieSlider({movie}) {
  return (
    <div className='flex justify-around items-center' >
        <img className="object-cover h-[82vh] opacity-30 rounded cursor-pointer blur-md" src={'https://image.tmdb.org/t/p/w400'+movie.backdrop_path} alt="Movie" />
        <motion.img className='absolute object-contain rounded-md pr-[70%] shadow-lg' src={'https://image.tmdb.org/t/p/w400'+movie.poster_path} alt="" />
        <div className=' flex h-3/4 justify-around flex-col absolute font-sans text-xl font-thin w-[800px] pl-56 text-start text-white overflow-hidden'>
          <h1 className='text-4xl font-semibold mb-9'>{movie.title}</h1>
          <p className=''>{movie.overview}</p>
          <motion.button whileHover={{y:-10, background:"lightblue", color:"white"}} transition={{duration:0.3}} className='bg-white text-blue-400 font-semibold px-4 pb-3 py-2 w-36 rounded-3xl mt-9'>watch now</motion.button>
        </div>
    </div> 
  )
}
