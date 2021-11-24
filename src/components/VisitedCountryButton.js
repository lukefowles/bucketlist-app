import React from 'react'

function VisitedCountryButton({updateVisitedCountryData, country}) {
    return (
        <div>
            <button onClick= {() => updateVisitedCountryData(country.name.common)}>Country visited</button>
        </div>
    )
}

export default VisitedCountryButton
