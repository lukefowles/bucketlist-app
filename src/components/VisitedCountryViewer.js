import React from 'react';
import IndividualCountry from './IndividualCountry';

function VisitedCountryViewer({visitedCountries}) {

    const individualVisitedCountryComponents = visitedCountries.map((country, index) => {
        return (
            <div>
                <IndividualCountry country={country} key={index} />
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
