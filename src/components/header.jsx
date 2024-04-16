'use client'
import React, { useState ,useRef} from 'react'
import { NavLink } from 'react-router-dom'
import { MdMovie } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { BiSearchAlt } from "react-icons/bi";
import { LogIn, Home, ChevronDown, X, User, Menu, Play, Search} from 'lucide-react';
import MenuButton from './MenuButton';
import {motion} from 'framer-motion'
import SearchInput from './SearchInput';

const variants = {
  open:{
    height:350,
    width:290
  },
  closed:{
    height:39,
    width:45
  }
}


export default function Header() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='flex justify-around p-2 pr-14 pt-5 fixed w-full items-center z-20'>
      <div className='flex items-center'>
        {/* <button className='md:hidden gap-3 ml-4' onClick={toggleMenu}>
          {openMenu ? <Play className='text-slate-500 rotate-180 transition-all duration-500'/> : <Play className='text-slate-500 translate-x-1 transition-all duration-300'/> }
        </button> */}
        <a href='/Movies' className='text-slate-600 text-xl font-bold drop-shadow-md items-center gap-4 md:flex hidden'>Movies</a>
        <a href='/Movies' className='text-red-800 text-xl font-bold drop-shadow-md items-center gap-4 md:flex hidden'>App</a>
      </div>

      
      <nav className='hidden gap-5 md:flex'>
        <NavLink to={'/Movies'} className={"navig active"}></NavLink>
        <NavLink to={'/Movies'} className={"navig"}>Home</NavLink>
        <NavLink to={'/About'} className={"navig"}>About</NavLink>
        <NavLink to={'/Contact'} className={"navig"}>Contact</NavLink>
        <NavLink to={'/Login'} className={"navig"}><User /></NavLink>
      </nav>
      

      <nav className=' flex gap-3 '>
        <NavLink to={'/Tv'} className={"navig "}>TVshows</NavLink>
        <NavLink to={'/Home'} className={"navig"}>Movies</NavLink>
      </nav>
      
      <div className="">
        <motion.div transition={{duration:0.5,ease:[0.76,0,0.24,1]}} variants={variants} animate={isActive? 'open' : 'closed'} initial="closed" className='bg-gray-600 rounded-2xl absolute top-4 right-10'></motion.div>
        <MenuButton isActive={isActive} setIsActive={setIsActive} />
      </div>

    </div>
  )
}
