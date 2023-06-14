// Elementy
var result = document.getElementById("geo-output");

// Po stisknutí tlačítka předá pozici (pokud možno) funkci showPosition
const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        result.innerHTML = "Geolocation is not supported by this browser.";
    }
}

// Výpočet vzdáleností a jejich zobrazení
const showPosition = (position) => {
    let fmDist = getDistanceFromLatLonInKm(position.coords.latitude, position.coords.longitude, 50.772775, 15.071418)
    let vargDist = getDistanceFromLatLonInKm(position.coords.latitude, position.coords.longitude, 59.452204, 9.043899)
    result.innerHTML = `Vzdálenost od FM TUL: <b>${round(fmDist)} km</b>.<br>Vzdálenost od Varga Vikernese: <b>${round(vargDist)} km</b>.`;
}

// Vzdálenost dvou bodů na mapě [km]
const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    var R = 6371;
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}

// Stupně na radiány
const deg2rad = (deg) => {
    return deg * (Math.PI / 180)
}

// Přesné zaokrouhlení na dvě desetinná místa
const round = (num) => {
    return +(Math.round(num + "e+2") + "e-2");
}
