import React from 'react'

function IndividualCountry({country}) {
    return (
        <div>
            <p>{country.name.common}, {country.capital}, 
            {country.population}, {country.flag}</p>
        </div>
    )
}

export default IndividualCountry
