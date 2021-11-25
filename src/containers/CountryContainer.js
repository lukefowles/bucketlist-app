
import { useState, useEffect } from "react";
import CountryViewer from "../components/CountryViewer";
import VisitedCountryViewer from "../components/VisitedCountryViewer";
import "./CountryContainer.css";

const CountryContainer = () => {

    const [countries, setCountries] = useState(null);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const updateVisitedCountryData = (name) => {
        console.log("Hi");
        const visitedCountry = countries.find(country => 
            country.name.common === name
        )
        setVisitedCountries([...visitedCountries, visitedCountry])
        const newCountries = countries.filter(country => country.name.common !== name)
        setCountries([...newCountries])
        console.log(visitedCountry);
    }

    const removeCountry = (name) => {
        const newCountries = visitedCountries.filter(country =>
            country.name.common !==name)
            setVisitedCountries([...newCountries])
                const removedCountries = visitedCountries.find(country => 
                country.name.common === name
            )
            setCountries([...countries, removedCountries])
    }


        if(countries && visitedCountries.length !== 0) {
           return( <>
            <CountryViewer countries={countries} updateVisitedCountryData={updateVisitedCountryData}/>
            {/* <VisitedCountryButton countries={countries} onClick={updateVisitedCountryData}/> */}
            <VisitedCountryViewer visitedCountries= {visitedCountries} removeCountry = {removeCountry}/>
            </>)
        }
        else if(countries ) {
            return (
                <>
            <CountryViewer countries={countries} updateVisitedCountryData={updateVisitedCountryData}/>
        </>
            )
        
        }
        else {
            return (<p>Loading countries...</p> )
        }


}

export default CountryContainer;