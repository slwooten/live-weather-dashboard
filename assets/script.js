var apiKey = 'ca3a4afc9bcd223f595f24041515a78d'
// var searchInputEl = document.querySelector('#search-input');
var cityContainerEl = document.querySelector('#city-container');
var searchBtn = document.querySelector('#search-btn');


// variable for fetching the geo api //
var getGeoApi = function() {
    var searchInput = document.getElementById('search-input');
    var geoUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid=" + apiKey;

    fetch(geoUrl) 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                var cityName = document.createElement('h3');
                var temp = document.createElement('<p>');  
                var wind = document.createElement('<p>');  
                var humidity = document.createElement('<p>');  
                var uvIndex = document.createElement('<p>'); 
                

                cityName.innerHTML(data[i].name);

                cityContainerEl.append(cityName);
            }
        })
}

searchBtn.addEventListener('click', getGeoApi);


