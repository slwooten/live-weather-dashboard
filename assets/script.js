var apiKey = 'ca3a4afc9bcd223f595f24041515a78d'
// var searchInputEl = document.querySelector('#search-input');
var cityContainerEl = document.querySelector('#city-container');
var searchBtn = document.querySelector('#search-btn');
var searchInput = document.getElementById('search-input');


// function for fetching the geo api //
var getApis = function() {
    
    var geoUrl = "https://api.openweathermap.org/data/2.5/weather/?&q=" + searchInput.value + "&appid=" + apiKey + "&units=imperial";
   
    fetch(geoUrl) 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('heres the data', data);
            
                var cityName = document.createElement('h3');
                var temp = document.createElement('p');  
                var wind = document.createElement('p');  
                var humidity = document.createElement('p');  
                var uvIndex = document.createElement('p'); 
                var latitude = data.coord.lat;
                var long = data.coord.lon;

                cityName.textContent = data.name;
                temp.textContent = 'Temp: ' + data.main.temp + '°F';
                wind.textContent = 'Wind: ' + data.wind.speed + ' MPH';
                humidity.textContent = 'Humidity: ' + data.main.humidity + '%';

                cityContainerEl.appendChild(cityName);
                cityContainerEl.appendChild(temp);
                cityContainerEl.appendChild(wind);
                cityContainerEl.appendChild(humidity);

                // url for the onecall api, gets daily weather using lat and lon from geo fetch //
                var oneCallApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + long + "&appid=" + apiKey;
            
                fetch(oneCallApi)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data);
                    })
        })
    
        
}

searchBtn.addEventListener('click', getApis);


