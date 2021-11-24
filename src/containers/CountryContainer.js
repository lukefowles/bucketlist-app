import axios from "axios";
import { useState, useEffect } from "react";
import CountryViewer from "../components /CountryViewer";
import VisitedCountryButton from "../components /VisitedCountryButton";
import BucketListCountryButton from "../components /BucketListCountryButton";

const CountryContainer = () => {

    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then(response => setCountry(response.data))
    }, []);

    // const updateVisitedCountryData = () => {
    //     console.log("updating dog data from DogContainer");
    //     axios.get("https://dog.ceo/api/breeds/image/random")
    //         .then(response => setCountry(response.data))
    // }

    const updateVisitedCountryData = () =>{
        
    }

    return (
        country ?
        <>
            <CountryViewer country={country}/>
            <BucketListCountryButton onClick={updateBucketListCountry}/>
            <VisitedCountryButton onClick={updateVisitedCountryData}/>
        </>
        :
        <p>Loading country photo...</p>
    )

}

export default CountryContainer;