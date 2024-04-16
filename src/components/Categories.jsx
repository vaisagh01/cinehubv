import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export default function Category(props) {
  return (
    <>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <NavLink to={'/Trending'} className={"categ-btn"}>Trending</NavLink>
        <NavLink to={'/Popular'} className={"categ-btn"}>Popular</NavLink>
        <NavLink to={'/Help'} className={"categ-btn"}>Genres</NavLink>
      </div>

    </>
  )
}
