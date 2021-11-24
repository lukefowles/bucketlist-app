import React from 'react';
import IndividualCountry from './IndividualCountry';

const CountryViewer = ({countries, updateVisitedCountryData}) => {

    const individualCountryComponents = countries.map((country, index) => {
        return (
            <div>
                <IndividualCountry country={country} key={index}
                 updateVisitedCountryData = {updateVisitedCountryData}/>
            </div>
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
