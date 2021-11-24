import React from 'react';
import IndividualCountry from './IndividualCountry';

const CountryViewer = ({countries}) => {

    const individualCountryComponents = countries.map((country, index) => {
        return (
            <IndividualCountry country={country} key={index} />
        )
    })

    return(
        <div className="individual-country-components">
            {individualCountryComponents}
        </div>
        // <div>
        //     <p>{countries[100].name.common}</p>
        // </div>
    )

}

export default CountryViewer
