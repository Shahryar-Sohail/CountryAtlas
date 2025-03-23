import React, { useState } from 'react';

const Filter = ({ search, setSearch, filter, setFilter, country, setCountry }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleSearchChange = (e) => {
        // e.preventDefault();
        setSearch(e.target.value);
    };

    const handleSelectChange = (value) => {
        setFilter(value);
        setIsVisible(false); // Close dropdown after selection
    };

    const sortCountries = (value) =>{
        const sortCountry = [...country].sort((a,b) =>{
            return value === "asc" 
            ? a.name.common.localeCompare(b.name.common) 
            : b.name.common.localeCompare(a.name.common)
        })
        setCountry(sortCountry)
    }

    return (
        <div className="mt-10 flex flex-wrap justify-center gap-2 w-3/4 mx-auto items-center">
            {/* Search Form */}
            <form className="w-full sm:w-auto flex gap-2">
                <div className="relative flex-grow">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" value={search} onChange={handleSearchChange}
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                    focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Search ..." required />
                </div>
                {/* <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700">
                    Search
                </button> */}
            </form>

            {/* Buttons Section */}
            <div className="flex flex-wrap w-full sm:w-auto justify-center gap-2 mt-2">
                <button type="button"
                    onClick={()=> sortCountries("asc")}
                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 
                focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5">
                    Ascending
                </button>
                <button type="button"
                    onClick={()=> sortCountries("dsc")}
                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 
                focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">
                    Descending
                </button>

                {/* Filter Dropdown */}
                <div className="relative">
                    <button type="button" onClick={() => setIsVisible(!isVisible)}
                        className="flex items-center text-yellow-400 hover:text-white border border-yellow-400 
                    hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium 
                    rounded-lg text-sm px-5 py-2.5">
                        {filter || "All"}
                        <svg className="ml-3 my-auto w-4 h-4 text-gray-800 dark:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                        </svg>
                    </button>
                    {isVisible && (
                        <ul className="absolute w-40 bg-yellow-500 dark:text-white flex flex-col space-y-2 p-4 rounded-md shadow-md">
                            {["All", "Africa", "Americas", "Asia", "Europe", "Oceania"].map((continent) => (
                                <li key={continent} onClick={() => handleSelectChange(continent)}
                                    className="cursor-pointer hover:bg-yellow-600 p-2 rounded text-center">
                                    {continent}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Filter;
