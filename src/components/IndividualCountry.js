import React from 'react'
import BucketListCountryButton from './BucketListCountryButton'
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
            <BucketListCountryButton />
            </div>
        </div>
    )
}

export default IndividualCountry
