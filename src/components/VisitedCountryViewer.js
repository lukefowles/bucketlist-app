import React from 'react';
import IndividualVisitedCountry from './IndividualVisitedCountry';

function VisitedCountryViewer({visitedCountries, removeCountry}) {

    const individualVisitedCountryComponents = visitedCountries.map((country, index) => {
        return (
            <div>
                <IndividualVisitedCountry country={country} key={index} removeCountry = {removeCountry} />
            </div>
        )
    })

    return(
        <div className="individual-country-components">
            {individualVisitedCountryComponents}
        </div>
        // <div>
        //     <p>{countries[100].name.common}</p>
        // </div>
    )
}

export default VisitedCountryViewer