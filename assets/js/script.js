

// google map
function initMap() {
        var HaightAshbury = {lat: 37.770015, lng: -122.446937};
        var map = new google.maps.Map(document.getElementById('GoogleMap'), {
          zoom: 12,
          center: HaightAshbury
        });
        var marker = new google.maps.Marker({
          position: HaightAshbury,
          map: map
        });
}
$(document).ready(initMap);

// opacity on scroll - nav
function handleScrollOpacity() {
  window.onscroll = function() {myFunction()};

  function myFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          w3.addClass('#topnav', 'w3-opacity');
      } else {           
           w3.removeClass('#topnav','w3-opacity');
      }
  }
}
$(document).ready(handleScrollOpacity);