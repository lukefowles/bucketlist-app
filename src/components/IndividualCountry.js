import React from 'react'
import VisitedCountryButton from './VisitedCountryButton'

function IndividualCountry({country}) {
    return (
        <div className = "country">
            <div className = "info">
            <p>{country.name.common}, {country.capital}, 
            {country.population}, {country.flag}</p>
            </div>
            <div className = "buttons">
            <VisitedCountryButton />
            </div>
        </div>
    )
}

export default IndividualCountry
