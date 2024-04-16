import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {Search} from 'lucide-react'

export default function SearchInput({setFiltered, allShows}) {
  const doSearch = (event) => {
    const value = event.target.value
    const filtered = allShows.filter(movie => (movie.title).toLowerCase().includes(event.target.value))
    setFiltered(filtered)
  }
  return (
    <div className='flex pt-2 relative'>
      <label className='absolute mt-[6px] pl-11 text-slate-600'><Search /></label>
      <input onChange={doSearch} placeholder='' type="text" className=' text-slate-400  bg-slate-700 w-32 focus:w-80 pl-10 pb-1 h-9 ml-9 rounded-full focus:pr-32 transition-all focus:duration-500 ease-in-out duration-400 focus:outline-none focus:-translate-y-[1px] focus:h-10' />
    </div>
  )
}
