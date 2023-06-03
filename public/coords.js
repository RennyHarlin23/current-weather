if ('geolocation' in navigator) {
    console.log("Location available");

    navigator.geolocation.getCurrentPosition( async position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({lat, lon}),
        }

        const postCoords = fetch('/', options);
        
    })
} else {
    console.log("Location not available");
}

