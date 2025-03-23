import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen flex-col items-center justify-center text-center'>
      <h1 className='text-red-500 text-9xl'>404 Not Found</h1>
      <NavLink to="/">
        <button class="mt-40 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent text-3xl hover:text-white">
            Go Home.
          </span>
        </button></NavLink>
    </div>
  )
}

export default NotFound