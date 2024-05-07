const backgroundChange = () => {
  let backgroundImage;

  
}

function updateTime() {
  const timeString = new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('time').textContent = timeString; 

  console.log(timeString);
}
updateTime();

//Weather
const getCityWeather = (city) => {
const apiKey = '5a16d87799c7b0cadfcb63ba6d84419c';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

document.getElementById('city1').textContent = city;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {

    // Weather Info
    const weatherInfo = `${Math.round(data.main.temp - 273.15)}°C`;

    document.getElementById('temp').textContent = weatherInfo;

    // Weather High and Low 
    const maxtemp = Math.round(data.main.temp_max - 273.15);
    const mintemp = Math.round(data.main.temp_min - 273.15);
    const highlow = `<span style="color: coral;">${maxtemp}°</span> / <span style="color: dodgerblue;">${mintemp}°</span>`;
    
    document.getElementById('highlow').innerHTML = highlow;

    // Weather Status Condition
    const weatherCondition = data.weather[0].icon;
    // console.log(weatherCondition);
    const iconURL = `http://openweathermap.org/img/wn/${weatherCondition}.png`;
    const weatherIcon = document.getElementById('weatherConditionIcon');

    weatherIcon.src = iconURL;

    document.getElementById('weatherDesc').innerText = data.weather[0].description;

  })
  .catch(error => console.log('Error fetching weather data:', error));

  // Add an event listener to the input field for the keypress event
document.getElementById('search').addEventListener('keypress', (event) => {
  // Check if the pressed key is Enter (key code 13)
  if (event.key === 'Enter') {
      event.preventDefault();
      
      const city = document.getElementById('search').value.trim();
      
      if (city !== '') {
          getCityWeather(city);
          document.getElementById('search').value = ''; 
      } else {
          console.error('City name is empty');
      }
  }
});

  // Add an event listener to the form for the submit event
  document.getElementById('weather-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.getElementById('search').value;
    if (city !== '') {
      getCityWeather(city);
      document.getElementById('search').value = '';
    } else {
        console.error('City name is empty');
    }
  });
}
