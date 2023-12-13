const weatherContainer = document.getElementById("weather-container");

function fetchWeather() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ashgabat&appid=<API_KEY>&units=metric`)
    .then(response => response.json())
    .then(data => {
      const temperature = Math.round(data.main.temp);
      const description = data.weather[0].main;

      weatherContainer.innerHTML = `<h1>${temperature}°C</h1><h2>${description}</h2>`;
    })
    .catch(error => {
      console.error(error);
    });
}

fetchWeather();
