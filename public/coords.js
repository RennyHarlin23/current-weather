if ('geolocation' in navigator) {
    console.log("Location available");

    navigator.geolocation.getCurrentPosition(async position => {
        try {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const options = {
                method: 'POST',
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify({ lat, lon }),
            }

            const response = await fetch('/', options);
            const weather = await response.json();
        


            const container = document.createElement('div');
            const lat_p = document.createElement('p');
            const lon_p = document.createElement('p');
            const temp_p = document.createElement('p');
            const des_p = document.createElement('p');


            lat_p.textContent = `Latitude : ${lat}`;
            lon_p.textContent = `Longitude : ${lon}`;
            temp_p.textContent = `Temperature : ${weather.temperature}`;
            des_p.textContent = `Weather Description : ${weather.weather_des}`;


            container.append(lat_p, lon_p, temp_p, des_p);

            document.body.append(container);
        }
        catch (err) {
            console.log(err);
        }
    })
} else {
    console.log("Location not available");
}

