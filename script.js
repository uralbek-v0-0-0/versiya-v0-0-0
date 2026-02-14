function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

/* ===== SOZLAMALAR ===== */
async function yangila() {

    // ⏰ Toshkent vaqti
    const hozir = new Date();
    const vaqt = hozir.toLocaleTimeString('en-GB', { timeZone: 'Asia/Tashkent' });
    document.getElementById("vaqt").textContent = vaqt;

    // 🌤️ Ob-havo
    const url = "https://api.open-meteo.com/v1/forecast?latitude=41.3111&longitude=69.2797&current_weather=true";
    const res = await fetch(url);
    const data = await res.json();

    const temp = Math.round(data.current_weather.temperature);
    const code = data.current_weather.weathercode;

    // Belgilar
    let belgi = "☀️";
    if ([1,2,3].includes(code)) belgi = "⛅";
    if ([45,48].includes(code)) belgi = "🌫️";
    if ([51,53,55,61,63,65,80,81,82].includes(code)) belgi = "🌧️";
    if ([71,73,75,85,86].includes(code)) belgi = "❄️";
    if ([95,96,99].includes(code)) belgi = "⛈️";

    document.getElementById("obHavo").textContent = belgi + " " + temp + "°C";
}

// ishga tushirish
yangila();

// vaqt har soniyada yangilanadi
setInterval(yangila, 1000);









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