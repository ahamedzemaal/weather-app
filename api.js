function getWeather() {
  const apiKey = "f4a8a418ee26cd78edb9b9cd7ea0829c";
  const location = document.getElementById("locationInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherDisplay = document.getElementById("WeatherDisplay");

      const sunrise = new Date((data.dt* 1000 + data.timezone) );

        let date = new Date(data.dt * 1000).toString();
        let ctime = date.slice(16, 24);
      weatherDisplay.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <h4>Longitude: ${data.coord.lon}°, Latitude: ${data.coord.lat}°</h4>
            <h4>Current Time: ${ctime}</h4>
            <p>Temperature: ${data.main.temp}°F</p>
            <p>Temperature Feels Like: ${data.main.feels_like}°F</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Current Weather: ${data.weather[0].description}</p>
            <p>Cloudiness: ${data.clouds.all}%</p>
            <p>Wind Speed: ${data.wind.speed} miles/hour</p>
            <p>Current Time: ${sunrise}</p>
            <p>Timezone: ${data.timezone} </p>
            <p>Weather Station ID: ${data.id}</p>
            `;
    })
    .catch((error) => console.log("Error: ", error));
}
