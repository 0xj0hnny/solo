angular.module('topDestinations.places', ['ngGPlaces', 'google-maps'.ns()])

.factory('placeAPI', function($q, ngGPlacesAPI){
	var places = []; 
	return {
		places: places,
		getPlaces: getPlaces 
	}
	function getPlaces(val){
		return ngGPlacesAPI.nearbySearch({keyword: val, latitude:37.7806521, longitude:-122.4061711})
			// // .then(function(data){
   //  		places = data
   //  		return data;
 		// }); 
	}
})

.controller('PlacesController', function($scope, placeAPI){
  placeAPI.getPlaces('first crush')
  .then(function (data){
  	$scope.places = {};

		_.forEach($scope.places,function(item, index){
			console.log(index);
			item.coords = {
				latitude : item.geometry.location.k, 
				longitude : item.geometry.location.B,
			}
		})
		// runMap(); 
  	console.log(data);
  })

  // console.log($scope.places.places)
  // function runMap(){
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
  // }
  // $scope.makers = []
  // 
  
  $scope.updateMap = function(val){
  	$scope.places = []; 
  	placeAPI.getPlaces(val)
		  .then(function (data){
		  	$scope.places = data;

				_.forEach($scope.places,function(item, index){
					console.log(index);
					item.coords = {
						latitude : item.geometry.location.k, 
						longitude : item.geometry.location.B,
					}
				})
			
				// runMap(); 
		  	console.log(data);
		  }); 
  }; 
  $scope.updateMap('first crush')
  $scope.$on('new place', function(place){
  	// $scope.place = place; 
  	 
  	$scope.updateMap(place.name); 
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
						longtitude: scope.place.geometry.location.B
					}
					scope.$emit('new place', scope.place)
					scope.$apply(function() {
						model.$setViewValue(element.val()); 
					console.log(scope.gPlace.gm_accessors_.place.rd.place);
					});
				});
			}
		};
})


// angular.module('appMaps', ['google-maps'.ns()])
//   .controller('mainCtrl', function ($scope, $log, $timeout) {
//     $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
//     $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
//     $scope.options = {scrollwheel: false};
//     $scope.coordsUpdates = 0;
//     $scope.dynamicMoveCtr = 0;
//     $scope.markers = [{
//       id: 0,
//       coords: {
//         latitude: 40.1451,
//         longitude: -99.6680
//       },
//       options: { draggable: true },
//       events: {
//         dragend: function (marker, eventName, args) {
//           $log.log('marker dragend');
//           var lat = marker.getPosition().lat();
//           var lon = marker.getPosition().lng();
//           $log.log(lat);
//           $log.log(lon);

//           $scope.marker.options = {
//             draggable: true,
//             labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
//             labelAnchor: "100 0",
//             labelClass: "marker-labels"
//           };
//         }
//       }
//     },
//     {
//       id: 1,
//       coords: {
//         latitude: 40.1452,
//         longitude: -99.6680
//       },
//       options: { draggable: true },
//       events: {
//         dragend: function (marker, eventName, args) {
//           $log.log('marker dragend');
//           var lat = marker.getPosition().lat();
//           var lon = marker.getPosition().lng();
//           $log.log(lat);
//           $log.log(lon);

//           $scope.marker.options = {
//             draggable: true,
//             labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
//             labelAnchor: "100 0",
//             labelClass: "marker-labels"
//           };
//         }
//       }
//     }
//     ];
//     $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
//       if (_.isEqual(newVal, oldVal))
//         return;
//       $scope.coordsUpdates++;
//     });
//     $timeout(function () {
//       $scope.marker.coords = {
//         latitude: 42.1451,
//         longitude: -100.6680
//       };
//       $scope.dynamicMoveCtr++;
//       $timeout(function () {
//         $scope.marker.coords = {
//           latitude: 43.1451,
//           longitude: -102.6680
//         };
//         $scope.dynamicMoveCtr++;
//       }, 2000);
//     }, 1000);
//   });