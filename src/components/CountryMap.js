import React from 'react';
import { useState, useEffect } from 'react';
import { MapContainer, GeoJSON, TileLayer} from "react-leaflet";
import mapData from "./../data/countries.json";
import "leaflet/dist/leaflet.css";
import "./CountryMap.css";
import IndividualCountry from './IndividualCountry';
import TestComponent from './TestComponent';
import ReactDOMServer from 'react-dom/server';

function CountryMap() {

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
        const newCountries = countries.filter(country =>
            country.name.common ===name)
            setVisitedCountries([...newCountries])
                const removedCountries = visitedCountries.find(country => 
                country.name.common === name
            )
            setCountries([...countries, removedCountries])
    }


    const onEachCountry = (geoJSONCountry, layer) => {
        console.log(countries[0].name.common);


        const matchingUnvisitedCountry = countries.find(country => 
            geoJSONCountry.properties.ISO_A3 === country.cca3);

        const unvisitedIndex = countries.findIndex((country) =>
            geoJSONCountry.properties.ISO_A3 === country.cca3);   

        const matchingVisitedCountry = visitedCountries.find((country) => 
                geoJSONCountry.properties.ISO_A3 === country.cca3);
        const visitedIndex = visitedCountries.findIndex((country) =>
            geoJSONCountry.properties.ISO_A3 === country.cca3);        

        
        if (matchingUnvisitedCountry) {
            // layer.bindPopup(matchingCountry.flag);
            const popUpContent = ReactDOMServer.renderToString(
                <IndividualCountry country={matchingUnvisitedCountry} 
                updateVisitedCountryData={updateVisitedCountryData} key={unvisitedIndex}/>
                );
                layer.bindPopup(popUpContent);

            }

        if(matchingVisitedCountry) {
            const popUpContent = ReactDOMServer.renderToString(
                <IndividualCountry country={matchingVisitedCountry} removeCountry = {removeCountry} 
                key ={visitedIndex}/>
              );
            layer.bindPopup(popUpContent);
        }

        layer.on({
            click: (event) => {
                event.target.setStyle({
                    color:"green",
                    fillColor:"yellow",
                    fillOpacity: 0.5
                })
            }
            
        })
    
    }

    let countryStyle = {
        fillColor: "blue",
        color: "black",
        weight: 2,
    }

    return (

        countries ? 
        <div>
           <h1>My Map</h1> 
           <MapContainer style={{height: "80vh"}} zoom={2} center={[20,100]} 
                updateVisitedCountryData={updateVisitedCountryData} removeCountry = {removeCountry}>
               <GeoJSON  style = {countryStyle} data = {mapData.features} onEachFeature={onEachCountry}
               updateVisitedCountryData={updateVisitedCountryData} removeCountry = {removeCountry}/>
               {/* <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      /> */}
           </MapContainer>
        </div>

        : 

        <p>Loading country data...</p>
    )
}

export default CountryMap
