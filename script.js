async function getWeather() {
  const city = document.getElementById("cityInput").value;

  const apiKey = "cdfbe878bb92007f7cfbc3297c90fbb6";
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
    );

    const data = await res.json();

    console.log(data);

    if (data.cod !== 200) {
      document.getElementById("result").innerHTML = "City not found";
      return;
    }

    document.getElementById("result").innerHTML = `
      <h3>${data.name}</h3>
      <p>${data.main.temp}°C</p>
      <p>${data.weather[0].description}</p>
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = "Error loading data";
  }
}