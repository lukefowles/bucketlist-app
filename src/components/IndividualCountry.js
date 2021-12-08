import React from 'react'
import VisitedCountryButton from './VisitedCountryButton'

function IndividualCountry({updateVisitedCountryData, country}) {
    return (
        <div className = "country">
            <div className = "info">
                <p className = "name">{country.name.common}</p>
                <p className = "capital">{country.capital}</p>
                <p className = "population">{country.population}</p>
                <p className = "flag">{country.flag}</p>
            </div>
            <div className = "buttons">
            <VisitedCountryButton updateVisitedCountryData = {updateVisitedCountryData} country= {country} />
            </div>
        </div>
    )
}

export default IndividualCountry
