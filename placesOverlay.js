PlaceOverlay.prototype = new google.maps.OverlayView(); 

function PlacesOverlay = function(bounds, name, ){
	this.bounds = bounds; 
	this.name = name;
}

PlacesOverlay.prototype.onAdd = function(){
	var div = document.createELement('div'); 
	div.style.border = 'none';
	div.style.borderWidth = '0px'; 
	div.style.position('absolute');
	this.div_ = div;
	 var panes = this.getPanes();
  panes.overlayImage.appendChild(this.div_);
}
