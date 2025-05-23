import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
})

export const getCountryData = () =>{
    return api.get("/all?fields=name,population,region,capital,flags,timezones,continents")
}

export const getSingleCountryData = (name) =>{
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,area,languages,borders,flags`)
}