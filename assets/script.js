var apiKey = 'ca3a4afc9bcd223f595f24041515a78d'
var content = document.getElementById('content');
var cityContainerEl = document.querySelector('#city-container');
var searchBtn = document.querySelector('#search-btn');
var searchInput = document.getElementById('search-input');
var fiveDayHeader = document.getElementById('five-day-header');
var dayOne = document.getElementById('day1');
var dayTwo = document.getElementById('day2');
var dayThree = document.getElementById('day3');
var dayFour = document.getElementById('day4');
var dayFive = document.getElementById('day5');


// function for fetching the geo api //
var getApis = function () {

    var geoUrl = "https://api.openweathermap.org/data/2.5/weather/?&q=" + searchInput.value + "&appid=" + apiKey + "&units=imperial";

    

    fetch(geoUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('heres the data', data);

            cityContainerEl.classList.add('city-box');
            var cityName = document.createElement('h3');
            var temp = document.createElement('p');
            var wind = document.createElement('p');
            var humidity = document.createElement('p');
            var uvIndex = document.createElement('p');
            var latitude = data.coord.lat;
            var long = data.coord.lon;

            cityName.textContent = data.name;
            temp.textContent = 'Temp: ' + data.main.temp + ' °F';
            wind.textContent = 'Wind: ' + data.wind.speed + ' MPH';
            humidity.textContent = 'Humidity: ' + data.main.humidity + '%';

            cityContainerEl.appendChild(cityName);
            cityContainerEl.appendChild(temp);
            cityContainerEl.appendChild(wind);
            cityContainerEl.appendChild(humidity);

            // url for the onecall api, gets daily weather using lat and lon from geo fetch //
            var oneCallApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + long + "&appid=" + apiKey + "&units=imperial";

            fetch(oneCallApi)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);

                    // adds header about 5 day forecast //
                    fiveDayHeader.textContent = '5-Day Forecast:';

                    // adds class to format 5 day forecast containers //
                    dayOne.classList.add('day-container');
                    dayTwo.classList.add('day-container');
                    dayThree.classList.add('day-container');
                    dayFour.classList.add('day-container');
                    dayFive.classList.add('day-container');

                    // creates heading for dates //
                    var dayOneDate = document.createElement('h4');
                    var dayTwoDate = document.createElement('h4');
                    var dayThreeDate = document.createElement('h4');
                    var dayFourDate = document.createElement('h4');
                    var dayFiveDate = document.createElement('h4');
                    
                    // creates p tags for temperatures //
                    var dayOneTemp = document.createElement('p');
                    var dayTwoTemp = document.createElement('p');
                    var dayThreeTemp = document.createElement('p');
                    var dayFourTemp = document.createElement('p');
                    var dayFiveTemp = document.createElement('p');

                    // creates p tags for wind //
                    var dayOneWind = document.createElement('p');
                    var dayTwoWind = document.createElement('p');
                    var dayThreeWind = document.createElement('p');
                    var dayFourWind = document.createElement('p');
                    var dayFiveWind = document.createElement('p');
                    
                    // creates p tags for humidity //
                    var dayOneHumidity = document.createElement('p');
                    var dayTwoHumidity = document.createElement('p');
                    var dayThreeHumidity = document.createElement('p');
                    var dayFourHumidity = document.createElement('p');
                    var dayFiveHumidity = document.createElement('p');

                    // selecting values I want for each day and appending them to their places in the html //
                    // day 1 of 5-day forecast //
                    dayOneDate.textContent = data.daily[0].dt;
                    dayOneTemp.textContent = 'Temp: ' + data.daily[0].temp.day + ' °F';
                    dayOneWind.textContent = 'Wind: ' + data.daily[0].wind_speed + ' MPH';
                    dayOneHumidity.textContent = 'Humidity: ' + data.daily[0].humidity + '%';

                    dayOne.appendChild(dayOneDate);
                    dayOne.appendChild(dayOneTemp);
                    dayOne.appendChild(dayOneWind);
                    dayOne.appendChild(dayOneHumidity);
                   
                    // // day 2 of 5-day forecast //
                    dayTwoDate.textContent = data.daily[1].dt;
                    dayTwoTemp.textContent = 'Temp: ' + data.daily[1].temp.day + ' °F';
                    dayTwoWind.textContent = 'Wind: ' + data.daily[1].wind_speed + ' MPH';
                    dayTwoHumidity.textContent = 'Humidity: ' + data.daily[1].humidity + '%';

                    dayTwo.appendChild(dayTwoDate);
                    dayTwo.appendChild(dayTwoTemp);
                    dayTwo.appendChild(dayTwoWind);
                    dayTwo.appendChild(dayTwoHumidity);
                   
                    // // day 3 of 5-day forecast //
                    dayThreeDate.textContent = data.daily[2].dt;
                    dayThreeTemp.textContent = 'Temp: ' + data.daily[2].temp.day + ' °F';
                    dayThreeWind.textContent = 'Wind: ' + data.daily[2].wind_speed + ' MPH';
                    dayThreeHumidity.textContent = 'Humidity: ' + data.daily[2].humidity + '%';

                    dayThree.appendChild(dayThreeDate);
                    dayThree.appendChild(dayThreeTemp);
                    dayThree.appendChild(dayThreeWind);
                    dayThree.appendChild(dayThreeHumidity);
                   
                    // // day 4 of 5-day forecast //
                    dayFourDate.textContent = data.daily[3].dt;
                    dayFourTemp.textContent = 'Temp: ' + data.daily[3].temp.day + ' °F';
                    dayFourWind.textContent = 'Wind: ' + data.daily[3].wind_speed + ' MPH';
                    dayFourHumidity.textContent = 'Humidity: ' + data.daily[3].humidity + '%';

                    dayFour.appendChild(dayFourDate);
                    dayFour.appendChild(dayFourTemp);
                    dayFour.appendChild(dayFourWind);
                    dayFour.appendChild(dayFourHumidity);
                   
                    // // day 5 of 5-day forecast //
                    dayFiveDate.textContent = data.daily[4].dt;
                    dayFiveTemp.textContent = 'Temp: ' + data.daily[4].temp.day + ' °F';
                    dayFiveWind.textContent = 'Wind: ' + data.daily[4].wind_speed + ' MPH';
                    dayFiveHumidity.textContent = 'Humidity: ' + data.daily[4].humidity + '%';

                    dayFive.appendChild(dayFiveDate);
                    dayFive.appendChild(dayFiveTemp);
                    dayFive.appendChild(dayFiveWind);
                    dayFive.appendChild(dayFiveHumidity);
                })
        })


}

searchBtn.addEventListener('click', getApis);


