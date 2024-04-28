import {motion} from 'framer-motion'
import { useState } from 'react'

export default function Movie({movie}) {
    const [isOpen, setIsOpen] = useState(false)
    const [show, setShow] = useState(false)
    return (
        <div>
            <motion.div onClick={()=>setShow(true)}  layout whileHover={{scale:1.08}} onHoverStart={e=>{}} onHoverEnd={e=>{}} className=' text-slate-300 p-1'>
                <motion.h2 className='max-w-40 overflow-hidden max-h-6'> {movie.title}</motion.h2>
                <motion.img onClick={()=>setIsOpen(!isOpen)} className="object-cover h-[50vh] mt-2 rounded-2xl cursor-pointer" src={'https://image.tmdb.org/t/p/w400'+movie.poster_path} alt="Movie" />
            </motion.div>
            {show ? <div className='h-[82vh] w-[93vw] bg-red-400 top-0 absolute '></div>: null}
        </div>
    )
  }
  