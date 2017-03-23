// w3.js
function w3IncludeHTML(){
  w3.includeHTML();
}
$(document).ready(w3IncludeHTML);

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
var fadeStart=100 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil=200 // 200px scroll or more will equiv to 0 opacity
    ,fading = $('#fading')
;

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    fading.css('opacity',opacity).html(opacity);
});