import React, { useEffect, useState, useTransition } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getSingleCountryData } from '../../api/postApi';
import Loader from '../UI/Loader';

export const CountryDetails = () => {

    const [country, setCountry] = useState([])
    // const [isVisible, setIsVisivle] = useState([])
    const [isPending, startTransition] = useTransition({});
    const params = useParams()


    useEffect(() => {
        startTransition(async () => {
            const res = await getSingleCountryData(params.id)
            if (res.status === 200) {
                setCountry(res.data[0])
                // console.log("Got Country Data", res.data[0]);
                // console.log("Country", country);

            }
        })
    }, []);
    if (isPending) {
        return <Loader />
    }

    return (
        <>
        <NavLink to={"/country"}>
            <button type="button" className="ml-10 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Back</button>
        </NavLink>

            <div className="min-h-screen grid grid-cols-2 gap-4 p-4 mt-10">
                {/* Left Column - Image */}
                <div className="flex items-center justify-center">
                    <img
                        className="w-auto h-auto object-cover"
                        src={country?.flags?.png}
                        alt={`${country?.name?.common} Flag`}
                    />
                </div>

                {/* Right Column - Country Data */}
                <div className="flex flex-col justify-center">
                    <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {country?.name?.common}
                    </h5>
                    <p className="text-gray-700 dark:text-gray-400 text-lg">
                        Capital: <strong>{country?.capital?.[0]}</strong>
                    </p>
                    <p className="text-gray-700 dark:text-gray-400 text-lg">
                        Region: <strong>{country?.region}</strong>
                    </p>
                    <p className="text-gray-700 dark:text-gray-400 text-lg">
                        Sub Region: <strong>{country?.subregion}</strong>
                    </p>
                    <p className="text-gray-700 dark:text-gray-400 text-lg">
                        Language: <strong>{Object.values(country?.languages || {})?.[0]}</strong>
                    </p>
                    <p className="text-gray-700 dark:text-gray-400 text-lg">
                        Area: <strong>{country?.area} km²</strong>
                    </p>
                    <p className="text-gray-700 dark:text-gray-400 text-lg">
                        Population: <strong>{country?.population}</strong>
                    </p>
                </div>
            </div>
        </>

    )
}

export default CountryDetails
