const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries();
const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    for (const country of countries) {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>Name:${country.name.common}</h3>
        <p>Capital:${country.capital}</p>
        <button onclick="loadCountriesByName('${country.name.common}')">Detail</button>
        
        `
        countriesDiv.appendChild(div)
    }
}

const loadCountriesByName = name => {
    // console.log(name)
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySingleCountry(data[0]))
}

const displaySingleCountry = country => {
    console.log(country)
    const countryDetailDiv = document.getElementById('country-detail');

    countryDetailDiv.innerHTML = `
    <h4>${country.name.common}</h4>
    <p>Population:${country.population}</p>
    <p>Area:${country.area}</p>
    <img src="${country.flags.png}">
    `
}