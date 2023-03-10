import React, { useContext, useEffect, useState } from 'react'
import {CiSearch} from 'react-icons/ci'
import HeroImg from '../assets/hero1.png'
import MobileHero from '../assets/hero2.png'
import ChartsComp from './ChartsComp'
import Album1 from '../assets/album2.png'
import Album2 from '../assets/album1.png'
import Album3 from '../assets/album4.png'
import { Context } from '../Context'
import { useNavigate } from 'react-router-dom'

const Hero = ({showAlbum}) => {
  const {size, setSize }  = useContext(Context);
  const {search, setSearch} = useContext(Context);
  useEffect(() => {
    window.addEventListener('resize', changeImg);

   
  });
  const changeImg = () => {
      setSize(window.innerWidth);
  }

  //DISPLAY SEARCH
  const navigate = useNavigate();
  const showSearch = (e)=> {
    e.preventDefault();
    navigate('/search')
  }

  //SAE TYPED INFO
  const searchShow = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }
  return (
    <div className='mb-[3rem] mt-[3rem] md:mt-0' >
        <div className='relative mb-[1rem]'>
            <CiSearch className='absolute my-auto h-full ml-[2rem]'/>
            <form onSubmit={showSearch}>
            <input type="text" className='p-[1rem] px-[4rem]  w-full text-lg outline-text-col focus:outline-double bg-transparent rounded-full' placeholder='Search artists' onChange={searchShow}/>
            </form>
        </div>
        <div className='flex flex-col xl:flex-row gap-[2rem]'>
          <div>

          <img src={size <= '762' ? MobileHero : HeroImg} alt="hero" className=''/>
          <i>Built with love by <a href="https://twitter.com/segun0x" className='text-[#FACD66]'>Segun Ojo</a></i>
          </div>
            <div className=' grid gap-[.5rem] '>
                <h1 className='text-3xl'>Top charts</h1>
                <div className='flex md:flex-col gap-[.5rem] chart'>
                  <ChartsComp id='1' img={Album1} title='Lofi Beats' name="Sean Swadder" timestamp="3:50:5" showAlbum={showAlbum}/>
                  <ChartsComp id='2' img={Album2} title='Gospel Music' name="Nathaniel Bassey and co.." timestamp="3:50:5" showAlbum={showAlbum}/>
                  <ChartsComp id='3' img={Album3} title='Tomorrows Tunes' name="Justin bieber" timestamp="3:50:5" showAlbum={showAlbum}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero