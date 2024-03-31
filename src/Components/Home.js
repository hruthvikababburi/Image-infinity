import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='bg-fuchsia-50 h-lvh p-10'>
        <h1 className='font-bold text-5xl text-fuchsia-900 mt-5 drop-shadow-md'>Welcome to ImageInfinity</h1>
        <p className='text-xl mt-8 text-fuchsia-800 pl-2'>At <span className='font-semibold ml-2 mr-2'>ImageInfinity</span>, we believe in the power of images to inspire, educate, 
            and connect people from all walks of life. Our curated collection of photographs 
            spans a wide range of categories, offering something for everyone. Whether you're a student,
            professional, or enthusiast, you'll find a wealth of stunning images to explore and enjoy.
        </p>
      </div>
    </div>
  )
}
