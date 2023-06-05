

const express = require('express');
const fetch = require('node-fetch');
const app = express();



require('dotenv').config()

app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

port = process.env.PORT || 3000;
app.listen(port, () => console.log(`The server is running in ${port}`));


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})


app.post('/', (req, res) => {
    
    const lat = req.body.lat;
    const lon = req.body.lon;
    const API_KEY = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    fetch_weather().catch(err => console.log(err));

    async function fetch_weather() {
        const response = await fetch(url);
        const currentWeather = await response.json();
        const temperature = currentWeather.main.temp;
        const weather_des = currentWeather.weather[0].description;
        res.json({ temperature, weather_des });
    }

})
