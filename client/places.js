angular.module('topDestinations.places', ['ngGPlaces', 'google-maps'.ns()])

.factory('placeAPI', function($q, ngGPlacesAPI){
	var places = []; 
	return {
		places: places,
		getPlaces: getPlaces 
	}
	function getPlaces(val){
		return ngGPlacesAPI.nearbySearch({keyword: val, latitude:37.7806521, longitude:-122.4061711});
	}
})


.controller("PlacesController", function($scope, placeAPI){
  var onePlace = {id:0, name:"Hack Reactor",coords:{latitude:37.783542,longitude:-122.40894300000002}} ;
  $scope.places = [onePlace];
  $scope.place = onePlace;  
  console.log($scope.place);
  $scope.map = {
    center: {
        latitude: 37.7806521,
        longitude: -122.4061711
    },
    zoom: 15,
    options: {
    	draggable: true
    }
  }
  $scope.updateMap = function(val, bool){
  	$scope.places = [val]; 
  	console.log($scope.places); 
  }; 
  $scope.$on('new place', function(place){
  	$scope.updateMap(place); 
  	$scope.$apply(); 
  }); 
})
.directive('googleplace', function() {
	return {
		require: 'ngModel',
		scope: true, 
		link: function(scope, element, attrs, model) {
			var options = {
				types: [],
				componentRestrictions: {}
			};
			scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
			 
			google.maps.event.addListener(scope.gPlace, 'place_changed', function(data) {
				scope.place = scope.gPlace.gm_accessors_.place.rd.place; 
				scope.place.coords = {
					latitude: scope.place.geometry.location.k,
					longitude: scope.place.geometry.location.B
				}
				scope.place.id = 0; 
				scope.$apply(function() {
					scope.updateMap(scope.place, true)
					model.$setViewValue(element.val()); 
					console.log(JSON.stringify({name: scope.place.name, coords:scope.place.coords}));
					console.log(scope.gPlace.gm_accessors_.place.rd.place);
				});
			});
		}
	};
})