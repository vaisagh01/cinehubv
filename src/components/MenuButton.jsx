import React from 'react'
import {motion} from 'framer-motion'
import {User, Menu, X} from 'lucide-react'
export default function MenuButton({isActive, setIsActive}) {
  return (
    <motion.div onClick={()=>{setIsActive(!isActive)}}  className='h-8 w-10 cursor-pointer overflow-hidden absolute top-5 right-[42.5px]  rounded-lg'>
      <motion.div className='absolute'  animate={{top:isActive ? "-100%" : "0%"}} transition={{duration:0.25,ease:[0.76,0,0.24,1]}}>
        <div className='w-10 h-8 rounded-lg bg-slate-600 text-slate-800 flex justify-center uppercase'>
            <p className='text-sm pt-1 font-sans font-bold'><Menu/></p>
        </div>
        <div className='absolute h-8 w-10 rounded-lg opacity-50 text-slate-900 flex justify-center items-center uppercase'>
            <p className='text-sm font-sans font-bold'><X/></p>
        </div>
      </motion.div>
    </motion.div>
  )
}
