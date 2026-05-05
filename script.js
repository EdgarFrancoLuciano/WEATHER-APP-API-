async function getWeather() {
  const city = document.getElementById("cityInput").value;

  const apiKey = "cdfbe878bb92007f7cfbc3297c90fbb6";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  document.getElementById("result").innerHTML = `
    <h2>${data.name}</h2>
    <p>${data.main.temp}°C</p>
    <p>${data.weather[0].description}</p>
  `;
}