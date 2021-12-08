# Mapp app

Mapp app is a mini-project created by Luke and Zahir. Currently the app uses the framework react alongside the library leaflet and the API: https://restcountries.com/v3.1 to provide an interactive map of countries which displays corresponding information when the country is clicked. To achieve this interactivity, we downloaded a countries geoJSON file which maps the country using a vast array of coordinates corresponding to the country border. We hoped to add buttons to the pop-up for each country, allowing the user to mark them as visited, but this is not possible with the geoJSON pop-up feature. We will need to refactor to use leaflet pop-ups, which do allow for event listening.


