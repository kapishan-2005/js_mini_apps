const apiKey = "e0f2c262816cb1e1af68777b7dccd1fe"; 
const btn = document.getElementById("getWeather");
const weatherDiv = document.getElementById("weather");

btn.addEventListener("click", () => {
  const zip = document.getElementById("zip").value.trim();
  const country = document.getElementById("country").value.trim();

  if (!zip || !country) {
    alert("Please enter both ZIP code and country code");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("Location not found");
      return res.json();
    })
    .then(data => {
      const { name } = data;
      const { temp, feels_like, humidity } = data.main;
      const { description, icon } = data.weather[0];
      const windSpeed = data.wind.speed;

      weatherDiv.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Temperature:</strong> ${temp}°C (Feels like ${feels_like}°C)</p>
        <p><strong>Condition:</strong> ${description} <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}"></p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
      `;
    })
    .catch(err => {
      weatherDiv.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
    });
});
