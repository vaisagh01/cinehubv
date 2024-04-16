import {motion} from 'framer-motion'
import {SwiperSlide} from 'swiper/react'
import 'swiper/css'


export default function Landing({show}) {
    return (
        <div>
            <div>
                <img className='w-[100%] opacity-20 rounded-sm absolute' src={'https://image.tmdb.org/t/p/w500'+show.backdrop_path} alt="Movie" />    
            </div>
            <div>
                <img className="object-cover h-[50vh] mt-2 rounded-2xl" src={'https://image.tmdb.org/t/p/w400'+show.poster_path} alt="Movie" />
            </div>
            <div>
                <h1>title</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ipsum et voluptate hic sed in illum facere, sit exercitationem ullam excepturi quia id eveniet doloremque, esse autem sapiente! Consequuntur, dolorem.</p>
            </div>
        </div>
    )
  }
  