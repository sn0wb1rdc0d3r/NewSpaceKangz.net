function initMap() {
        var HaightAshbury = {lat: 37.770015, lng: -122.446937};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: HaightAshbury
        });
        var marker = new google.maps.Marker({
          position: HaightAshbury,
          map: map
        });
}

