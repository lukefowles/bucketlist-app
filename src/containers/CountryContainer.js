
import { useState, useEffect } from "react";
import CountryViewer from "../components/CountryViewer";
import VisitedCountryButton from "../components/VisitedCountryButton";
import "./CountryContainer.css";

const CountryContainer = () => {

    const [countries, setCountries] = useState(null);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const updateVisitedCountryData = (name) =>{
        const visitedCountry = countries.find((country) => {
            country.name.common === name
        })
        setVisitedCountries([...visitedCountries, visitedCountry])
    }

    return (
        countries ?
        <>
            <CountryViewer countries={countries}/>
            <VisitedCountryButton onClick={updateVisitedCountryData}/>
        </>
        :
        <p>Loading country photo...</p>
    )

}

export default CountryContainer;