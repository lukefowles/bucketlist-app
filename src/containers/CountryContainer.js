
import { useState, useEffect } from "react";
import CountryViewer from "../components/CountryViewer";
import VisitedCountryButton from "../components/VisitedCountryButton";
import BucketListCountryButton from "../components/BucketListCountryButton";
import "./CountryContainer.css";

const CountryContainer = () => {

    const [countries, setCountries] = useState(null);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);

    // const updateVisitedCountryData = () => {
    //     console.log("updating dog data from DogContainer");
    //     axios.get("https://dog.ceo/api/breeds/image/random")
    //         .then(response => setCountry(response.data))
    // }

    const updateVisitedCountryData = () =>{
        
    }

    return (
        countries ?
        <>
            <CountryViewer countries={countries}/>
            {/*<BucketListCountryButton onClick={updateBucketListCountry}/> */}
            <VisitedCountryButton onClick={updateVisitedCountryData}/>
        </>
        :
        <p>Loading country photo...</p>
    )

}

export default CountryContainer;