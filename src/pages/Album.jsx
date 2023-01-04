import React from 'react'
import Album1 from '../assets/Lead-image.png'
import Pause from '../assets/Play.png'
import Collection from '../assets/music-square-add.png'
import Love from '../assets/Heart.png'
import AlbumComp from '../components/AlbumComp'

const Album = ({title, desc, length, img}) => {
    const playAll = () => {
        
    }
  return (
    <div className='ml-[3rem] md:ml-[7rem] grid gap-[3rem]'>

    <div className="pt-[7rem] flex gap-[2rem] items-center alb">
        <img src={Album1} alt="" className='rounded-3xl'/>
        <div className=' grid gap-[1rem]'>
            <h1 className='text-3xl text-[#A4C7C6]'>{title}</h1>
            <p className='text-[#EFEEE0]'>{desc}</p>
            <p className='text-[#EFEEE0]'>{length}</p>
            <div className='flex items-center'>
                <div className='flex gap-[1rem] text-[#EFEEE0] p-[1.5rem] rounded-full bg-transp items-center' onClick={playAll}>
                    <img src={Pause} alt="" width='16px' height='16px'/>
                    <p>Play all</p>
                </div>
                <div className='flex gap-[1rem] text-[#EFEEE0] p-[1.5rem] rounded-full bg-[transp] items-center'>
                    <img src={Collection} alt="" />
                    <p>Add to Collection</p>
                </div>
                <img src={Love} alt="like" className='p-[1.5rem] rounded-full bg-[transp]'/>
            </div>
            
        </div>
    </div>
    <div className='grid gap-[1rem]'>
        <AlbumComp />
        <AlbumComp />
        <AlbumComp />
        <AlbumComp />
    </div>
    </div>
  )
}

export default Album