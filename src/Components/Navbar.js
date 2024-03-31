import React from 'react'
import { IoIosSearch } from "react-icons/io";
export default function Navbar() {
  return (
    <nav className='navbar bg-fuchsia-950 text-white h-auto flex flex-row justify-between items-center p-3 pr-4 pl-4 w-full h-16'>
        <div className='flex flex-row justify-between items-center '>
            <img src='https://is5-ssl.mzstatic.com/image/pf/us/r30/Purple3/v4/82/4d/a4/824da447-5a04-bdec-ff7f-eb39dd4c4809/pr_source.png' className='logo h-8 md:h-10' alt='website-logo'/>
            <h1 className='text-3xl text-fuchsia-50 ml-3 cursor-pointer font-semibold'>ImageInfinity</h1>
        </div>
        <div className=' flex flex-row justify-between items-center'>
            <ul className='nav-items-list flex flex-row justify-between items-center'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>About Us</li>
            <li className='nav-item'>Contact Us</li>
            </ul>
            <div className='p-2 text-fuchsia-50 w-searchBar bg-transparent flex flex-row justify-between items-center border border-fuchsia-50 rounded-md'>
                <input type='text' className='outline-none bg-transparent'/>
                <IoIosSearch color='#fdf4ff' size={20} className='cursor-pointer'/>  
            </div>
        </div>
      </nav>
  )
}
