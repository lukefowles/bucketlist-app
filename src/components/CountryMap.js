import React from 'react';
import { MapContainer, GeoJSON, TileLayer} from "react-leaflet";
import mapData from "./../data/countries.json";
import "leaflet/dist/leaflet.css";
import "./CountryMap.css";

function CountryMap() {


    return (
        <div>
           <h1>My Map</h1> 
           <MapContainer style={{height: "80vh"}} zoom={2} center={[20,100]}>
               <GeoJSON data = {mapData.features}/>
               {/* <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      /> */}
           </MapContainer>
        </div>
    )
}

export default CountryMap
