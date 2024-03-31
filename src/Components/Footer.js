import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    
    <footer className="bg-fuchsia-950 w-full p-4 text-fuchsia-50 py-6 mb-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-4 lg:mb-0">
          <h2 className="text-2xl font-bold mb-2">ImageGallery</h2>
          <p className="text-sm">Your go-to destination for stunning images across various categories.</p>
        </div>
        <div className="flex flex-wrap items-center">
          <ul className="flex mr-6">
            <li className="mr-4 hover:text-gray-400 transition duration-300 ease-in-out">
            <Link to="/">Home</Link>
            </li>
            <li className="mr-4 hover:text-gray-400 transition duration-300 ease-in-out">
            <Link to="/about">About Us</Link>
            </li>
            <li className="mr-4 hover:text-gray-400 transition duration-300 ease-in-out">
            <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div>
            <p className="text-sm">&copy; {new Date().getFullYear()} ImageGallery. All rights reserved.</p>
          </div>
        </div>
      </div>
  </footer>
    
  )
}
