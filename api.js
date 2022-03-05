'use strict'
const getCountryData = function(country){
//const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////
const request = new XMLHttpRequest();
request.open('GET', `
https://restcountries.com/v2/name/${country}`);
request.send();
// console.log(request.responseText);
request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText);
    // console.log(this.responseText);
    // console.log(data);
    const newCountry = `
    <div class = "country">
        <img class = "country__img" src="${data.flag}"/>
        <div class = "country__data">
            <h3 class = "country__name">Country: ${data.name}</h3>
            <h4 class = "country__region">Region: ${data.region}</h4>
            <p class = "country__row">Populations: ${(+data.population / 1000000).toFixed(1)} milions</p>
            <p class = "country__row">Language: ${data.languages[0].name}</p>
            <p class = "country__row">Currency: ${data.currencies[0].name}</p>
        </div>
    </div>
    `;
    countriesContainer.innerHTML = newCountry;
});
}
const countryInput = document.querySelector('.country__input');

const countrySub = document.querySelector('.country__submit');
const info = document.querySelector('.information');
//console.log(info);
const countryFind = function(){
    const countryValue = countryInput.value;
    console.log(countryValue);
    if (!!countryValue) {
        getCountryData(countryValue);
        info.textContent = '';
        countryInput.value = '';
    }
    else info.textContent = 'cannot found your country';
}
countryInput.addEventListener('keyup', function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        countryFind();
    }
})
countrySub.addEventListener('click', function(){
    countryFind();
});
// getCountryData('vietnam');
// getCountryData('cambodia');