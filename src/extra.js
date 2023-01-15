function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sun", 
  "Mon", 
  "Tue", 
  "Wed", 
  "Thu", 
  "Fri", 
  "Sat"
];
let day = days[date.getDay()];
return  `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");

celsiusTemperature = response.data.main.temp;

   temperatureElement.innerHTML = Math.round(celsiusTemperature);
   cityElement.innerHTML = response.data.name;
   descriptionElement.innerHTML = response.data.weather[0].description;
   humidityElement.innerHTML = response.data.main.humidity;
   windElement.innerHTML = Math.round(response.data.wind.speed);
   dateElement.innerHTML = formatDate(response.data.dt * 1000);
   iconElement.setAttribute 
 "src", 
 `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=bo47df7eab4a9c009f0343t0f7c9207d&units=metric'
); 
iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let apiKey = "c125eb344194a5a8a1f0e673edb26318"; 
  let apiUrl = `;https://api.shecodes.io/weather/v1/current?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(displayTemperature);
}
 
function handleSubmit(event) {
event.preventDefault();
let cityInputElement = document.querySelector("#city-input");
search(cityInputElement.value);
}

function displayFahrenheitTemperature(event) {
event.preventDefault();
let temperatureElement = document.querySelector("#temperature")
let fahrenheitTemperature = (celsiusTemperature * 9) / 5 * 32;
temperatureElement.innerHTML = math.round(fahrenheitTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-Link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

search("New York");



celsiusLink.classList.remove("active");
fahrenheitLink.classList.add("active");
let fahrenheitTemperature = (celsiusTemperature * 9) / 5 * 32;
temperatureElement.innerHTML = math.round(fahrenheitTemperature);


function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let celsiusTemperature = (fahrenheitTemperature * 9) / 5 * 32;
  temperatureElement.innerHTML = math.round(celsiusTemperature);
  }
  
  









