import React from 'react'

function RemoveCountryButton({removeCountry, country}) {
    return (
        <div>
            <button onClick= {() => removeCountry(country.name.common)}>Remove Country</button>
        </div>
    )
}

export default RemoveCountryButton
