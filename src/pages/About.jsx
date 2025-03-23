import React from 'react'
import countryapi from '../api/country.json'

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-800 m-14">
      <h1 className="bg-white dark:bg-gray-800 text-center text-black dark:text-white text-5xl">
        Here are the Interesting Facts<br />
        we’re proud of
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-8">
        {countryapi.map((country) => (
          <div
            key={country.id}
            className="w-80 h-96 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col
                   items-center p-4 hover:shadow-gray-800 dark:hover:shadow-white"
          >
            <img
              className="w-36 h-24 object-cover"
              src={country.flag}
              alt={`${country.countryName} Flag`}
            />
            <div className="text-center mt-4">
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white">{country.countryName}</h5>
              <p className="text-gray-700 dark:text-gray-400 text-lg">Capital: <strong>{country.capital}</strong></p>
              <p className="text-gray-700 dark:text-gray-400 text-lg">Region: <strong>{country.region}</strong></p>
              <p className="text-gray-700 dark:text-gray-400 text-lg">Language: <strong>{country.language}</strong></p>
              <p className="text-gray-700 dark:text-gray-400 text-lg">Area: <strong>{country.area}</strong></p>
              <p className="text-gray-700 dark:text-gray-400 text-lg">Population: <strong>{country.population}</strong></p>
              <p className="text-gray-700 dark:text-gray-400 text-lg">Postal Code: <strong>{country.postalCode}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
