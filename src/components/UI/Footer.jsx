import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='dark:bg-gray-800'>
      <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/"
            className="hover:underline">Country Atlas™</Link>. Developed By <a href='https://github.com/Shahryar-Sohail' target='_blank'>
            <span className='text-red-500 hover:text-green-500'>Shahryar.</span></a>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link to="/country" className="hover:underline me-4 md:me-6">Country</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>

  )
}

export default Footer
