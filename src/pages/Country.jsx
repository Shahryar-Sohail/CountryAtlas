import React, { useState } from 'react'
import { useEffect, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import Loader from '../components/UI/Loader';
import { NavLink } from 'react-router-dom';
import Filter from '../components/UI/Filter';
const Country = () => {
  const [country, setCountry] = useState([])
  const [isPending, startTransition] = useTransition({});
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData()

      setCountry(res.data)
    })
  }, []);
  if (isPending) {
    return <Loader />
  }

  // console.log(search,filter);


  const searchCountry = (country) => {
    if (search){
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return country

  }

  const filterRegion = (country) => {
    if (filter === "All") return country 
    return country.region === filter 
  }

  const filterCountries = country.filter((country) => searchCountry(country) && filterRegion(country))
  

  return (
    <div>
    <Filter 
    search={search}
    setSearch={setSearch}
    filter={filter}
    setFilter={setFilter}
    country={country} 
    setCountry={setCountry}

    />


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 justify-items-center mt-8">
        {filterCountries.map((country) => (
          <div
            key={country.name.common}
            className="w-80 h-96 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col
                   items-center p-4 hover:shadow-gray-800 dark:hover:shadow-white"
          >
            <img
              className="w-36 h-24 object-cover"
              src={country.flags.png}
              alt={`${country.name.common} Flag`}
            />
            <div className="text-center mt-4">
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white">{country.name.common}</h5>
              <p className="text-gray-700 dark:text-gray-400 text-lg">Capital: <strong>{country.capital}</strong></p>
              <p className="text-gray-700 dark:text-gray-400 text-lg">Region: <strong>{country.region}</strong></p>
              <p className="text-gray-700 dark:text-gray-400 text-lg">TimeZone: <strong>{country.timezones?.[0]?.substring(0, 10)}</strong></p>
              <p className="text-gray-700 dark:text-gray-400 text-lg">Population: <strong>{country.population}</strong></p>
              <p className="text-gray-700 dark:text-gray-400 text-lg">Continents: <strong>{country.continents}</strong></p>
            </div>
            <NavLink to={`/country/${country.name.common}`}>
              <button type="button" className="text-red-700 hover:text-white my-4 border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Read More</button>
            </NavLink>

          </div>
        ))}
      </div>


    </div>
  )
}

export default Country
