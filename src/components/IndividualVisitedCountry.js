import React from 'react'
import RemoveCountryButton from './RemoveCountryButton'

function IndividualVisitedCountry({country, removeCountry}) {
    return (
        <div className = "country">
            <div className = "info">
            <p>{country.name.common}, {country.capital}, 
            {country.population}, {country.flag}</p>
            </div>
            <div className = "buttons">
            <RemoveCountryButton country= {country} removeCountry = {removeCountry} />
            </div>
        </div>
    )
}

export default IndividualVisitedCountry
