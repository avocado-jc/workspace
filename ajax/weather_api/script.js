


//lat={lat}
//&lon={lon}
//&appid={API key}


function getWeather() {
    var units = 'imperial'
    var apiKey = "e96ec23f8100ca6a73bc6628f77ea6fa"
    var lat = 45.3028
    var lon = -122.9656
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", responseReceivedHandler);
    xhr.responseType = "json";
    xhr.open("GET", url);
    xhr.send();
}

function responseReceivedHandler() {
   let weatherInfo = document.querySelector("#weather");
   if (this.status === 200) {
      weatherInfo.innerHTML = 
       "<p>Current temp: " + this.response.main.temp + " &deg;F</p>" +
       "<p>Desc: " + this.response.weather[0].description + "</p>" +
       "<p>Humidity: " + this.response.main.humidity + "%</p>";
   } else {
      weatherInfo.innerHTML = "Weather data unavailable.";
   }
}