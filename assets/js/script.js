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


// function handleFooBar(){
// 	var name = null;
// 	$('#btnFoo').click(function(event) {
//   	name = $('#txtFoo').val();
//     $('#divBar').text('foobar ' + name)
//   })
//  }
// $(document).ready(handleFooBar);