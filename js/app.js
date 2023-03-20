const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = (countries) => {
    console.log(countries)
    const countriesHTML = countries.map(country => getCountryHTML(country)).join(" ");

    const countryContainer = document.getElementById('countries');
    countryContainer.innerHTML = countriesHTML;
}


// option 2
const getCountryHTML = ({name, flags, area, region}) => {
    return `
        <div class="country">
            <h3>${name.common}</h3>
            <p>Area: ${area}</p>
            <p>Continent: ${region}</p>
            <img src="${flags.png}">
        </div>
    `
}



// option 1
// const getCountryHTML = (country) => {

//     const {name, flags} = country;
//     return `
//         <div class="country">
//             <h3>${name.common}</h3>
//             <img src="${flags.png}">
//         </div>
//     `
// }

// original
// const getCountryHTML = country => {
//     return `
//         <div class="country">
//             <h3>${country.name.common}</h3>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }


loadCountries()