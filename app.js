function initialize() {
  var hrLat = 39.4438478;  var hrLong = -94.9744697;
  var myLatLng = new google.maps.LatLng(hrLat, hrLong);
  var mapOptions = {
    zoom: 5,
    center: myLatLng
  };


  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
}

google.maps.event.addDomListener(window, 'load', initialize);

// var map = new 