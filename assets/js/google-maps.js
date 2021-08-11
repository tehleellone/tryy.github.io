function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 34.059332, lng: 74.838645};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Srinagar, India' // Title Location
    });
}
