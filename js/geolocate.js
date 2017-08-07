/* MAPBOXGL
// Add geolocate control to the map.
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    }));
*/

// LEAFLET + MAPBOX
// add location control to global name space for testing only
// on a production site, omit the "lc = "!
L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
      
    
