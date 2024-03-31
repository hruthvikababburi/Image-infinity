// import React from 'react'
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoIosSearch } from "react-icons/io";
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";


export default function Navbar({setData}) {
  
  const [search,setSearch] = useState('')
  const handleChange=(event)=>{
    setSearch(event.target.value)
    console.log(search)
  }
  const handleSubmit=()=>{
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
    .then((res)=>{
        setData(res.data.photos.photo)
        setSearch('')
        
    }).catch((error)=>{
        console.log(error)
    })
  }
  return (
    <nav className='navbar  bg-fuchsia-950 text-white h-auto flex flex-row justify-between items-center p-4 pr-4 pl-4 w-full h-16' style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
        <div className='flex flex-row justify-between items-center '>
            <img src='https://is5-ssl.mzstatic.com/image/pf/us/r30/Purple3/v4/82/4d/a4/824da447-5a04-bdec-ff7f-eb39dd4c4809/pr_source.png' className='logo h-8 md:h-10' alt='website-logo'/>
            <h1 className='text-3xl text-fuchsia-50 ml-3 cursor-pointer font-semibold'><Link to='/'>ImageInfinity</Link></h1>
        </div>
        <div className=' flex flex-row justify-between items-center'>
            <ul className='nav-items-list flex flex-row justify-between items-center'>
                <li className='nav-item'><Link to="/">Home</Link></li>
                <li className='nav-item'><Link to='/about'>About Us</Link></li>
                <li className='nav-item'><Link to='/contact'>Contact Us</Link></li>
            </ul>
            <div className='p-2 text-fuchsia-50 w-searchBar bg-transparent flex flex-row justify-between items-center border border-fuchsia-50 rounded-md'>
                <input type='text' className='outline-none bg-transparent' value={search} onChange={handleChange}/>
                <Link to='searchresults'>
                    <IoIosSearch color='#fdf4ff' size={20} className='cursor-pointer' onClick={handleSubmit}/>
                </Link>
                  
            </div>
        </div>
      </nav>
  )
}
