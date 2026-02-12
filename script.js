function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

/* ===== SOZLAMALAR ===== */
const WEATHER_API_KEY = "840a8ec0caec0104a8633e901bdd873b";
const CITY = "Samarkand";

/* ===== 1. TOSHKENT VAQTI ===== */
function updateTime() {
    const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Tashkent" })
    );

    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("tk-time").textContent =
        h + ":" + m + ":" + s;
}

setInterval(updateTime, 1000);
updateTime();


/* ===== 2. OB-HAVO ===== */
function getWeatherIcon(main) {
    switch (main) {
        case "Clear": return "☀️";
        case "Clouds": return "☁️";
        case "Rain": return "🌧️";
        case "Drizzle": return "🌦️";
        case "Snow": return "❄️";
        case "Thunderstorm": return "⛈️";
        case "Mist":
        case "Fog": return "🌫️";
        default: return "🌡️";
    }
}

async function fetchWeather() {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${WEATHER_API_KEY}`
        );
        const data = await res.json();

        const temp = Math.round(data.main.temp) + "°C";
        const icon = getWeatherIcon(data.weather[0].main);

        document.getElementById("tk-weather").textContent =
            icon + " " + temp;
    } catch {
        document.getElementById("tk-weather").textContent = "--°C";
    }
}

fetchWeather();
setInterval(fetchWeather, 10 * 60 * 1000);