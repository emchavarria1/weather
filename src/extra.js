function getWeather() {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let location = document.getElementById("location");

  let api = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "c125eb344194a5a8a1f0e673edb26318";

  location.innerHTML = "Locating...";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    let url =
      api +
      "?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      apiKey +
      "&units=imperial";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let temp = data.main.temp;
        temperature.innerHTML = temp + "° F";
        location.innerHTML =
          data.name + " (" + latitude + "°, " + longitude + "°)";
        description.innerHTML = data.weather[0].main;
      });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }
}

getWeather();

let now = new Date();
let h3 = document.querySelector("h3");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let milliseconds = now.getMilliseconds();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let millisecond = milliseconds[now.getMilliseconds()];
console.log(now.getMillisecond);
console.log(now.getDate);
console.log(now.getDay);
console.log(now.getFullYear);
console.log(now.getMonth);
console.log(now.formatDate);
h3.innerHTML = `${day} ${month} ${date}, ${hours}: ${minutes}, ${year}`;

let inputval = document.querySelector("#cityinput");
let btn = document.querySelector("#add");
let city = document.querySelector("#cityoutput");
let descrip = document.querySelector("#description");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
apik = "3045dd712ffe6e702e3245525ac7fa38";
function convertion(val) {
  return (val - 273).toFixed(2);
}

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())

    .then((data) => {
      let nameval = data["name"];
      let descrip = data["weather"]["0"]["description"];
      let tempature = data["main"]["temp"];
      let wndspd = data["wind"]["speed"];
      city.innerHTML = `Weather of <span>${nameval}<span>`;
      temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`;
      description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`;
    })

    .catch((err) => alert("You entered Wrong city name"));
});
function submitted(event) {
  event.preventDefault();
}

f.addEventListener("submit", submitted);
