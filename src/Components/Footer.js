import React from 'react'

export default function Footer() {
  return (
    
    <footer className="bg-fuchsia-950 w-full p-4 text-fuchsia-50 py-6">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
      <div className="mb-4 lg:mb-0">
        <h2 className="text-2xl font-bold mb-2">ImageGallery</h2>
        <p className="text-sm">Your go-to destination for stunning images across various categories.</p>
      </div>
      <div className="flex flex-wrap items-center">
        <ul className="flex mr-6">
          <li className="mr-4 hover:text-gray-400 transition duration-300 ease-in-out">
            Home
          </li>
          <li className="mr-4 hover:text-gray-400 transition duration-300 ease-in-out">
            About
          </li>
          <li className="mr-4 hover:text-gray-400 transition duration-300 ease-in-out">
            Contact
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
