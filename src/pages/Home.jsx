import React from 'react'
import world from '../assets/world.png'
import About from './About'
import Country from '../api/country.json'

const Home = () => {
  return (
    <div className='dark:bg-gray-800'>
      <div className='flex flex-col items-center justify-center gap-4 p-4 md:flex-row md:gap-8'>
        {/* left div */}
        <div className="max-w-lg p-6 bg-white dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h2 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Explore the World, One Country at a Time.</h2>
          </a>
          <p className="mb-8 font-normal text-gray-700 dark:text-gray-400">Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-white bg-red-700 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-700 dark:hover:bg-green-700 dark:focus:ring-blue-800">
            Explore
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>

        {/* right div  */}

        <img className="h-auto max-w-md rounded-lg" src={world} alt="image description" />
        
      </div>
      {/* about  */}
      <About />
    </div>
  )
}

export default Home