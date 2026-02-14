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
const CITY = "Tashkent";

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









async function barchaObHavo() {

    const shaharlar = [
        {nom:"Toshkent", lat:41.3111, lon:69.2797},
        {nom:"Andijon", lat:40.7833, lon:72.3500},
        {nom:"Farg‘ona", lat:40.3894, lon:71.7843},
        {nom:"Namangan", lat:41.0000, lon:71.6726},
        {nom:"Samarqand", lat:39.6542, lon:66.9597},
        {nom:"Buxoro", lat:39.7747, lon:64.4286},
        {nom:"Navoiy", lat:40.0844, lon:65.3792},
        {nom:"Qarshi", lat:38.8606, lon:65.7891},
        {nom:"Termiz", lat:37.2242, lon:67.2783},
        {nom:"Guliston", lat:40.4897, lon:68.7842},
        {nom:"Jizzax", lat:40.1158, lon:67.8422},
        {nom:"Urganch", lat:41.5500, lon:60.6333},
        {nom:"Nukus", lat:42.4600, lon:59.6100}
    ];

    function belgiAniqla(code){
        if ([1,2,3].includes(code)) return "⛅";
        if ([45,48].includes(code)) return "🌫️";
        if ([51,53,55,61,63,65,80,81,82].includes(code)) return "🌧️";
        if ([71,73,75,85,86].includes(code)) return "❄️";
        if ([95,96,99].includes(code)) return "⛈️";
        return "☀️";
    }

    let natija = "";

    for (let shahar of shaharlar) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${shahar.lat}&longitude=${shahar.lon}&current_weather=true`;

        try {
            const res = await fetch(url);
            const data = await res.json();

            const temp = Math.round(data.current_weather.temperature);
            const belgi = belgiAniqla(data.current_weather.weathercode);

            natija += `${shahar.nom} ${belgi} ${temp}°C | `;
        } catch(e) {
            natija += `${shahar.nom} xato | `;
        }
    }

    document.getElementById("allWeather").textContent = natija.slice(0, -3);
}

barchaObHavo();
setInterval(barchaObHavo, 600000); // 10 daqiqada yangilanadi