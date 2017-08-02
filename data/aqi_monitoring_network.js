var stations = {
   'type': 'FeatureCollection',
   'features': [
  {
    'type': 'Feature',
    'geometry': {
       'type': 'Point',
       'coordinates':  [ 4.904584,52.372234 ]
    },
    'properties': {
    'Station':'Amsterdam-Oude-Schans',
    'type':'City Background'
    }
  },
  {
    'type': 'Feature',
    'geometry': {
       'type': 'Point',
       'coordinates':  [ 4.899696,52.358080 ]
    },
    'properties': {
    'Station':'Amsterdam-Stadhouderskade',
    'type':'Street Traffic'
    }
  },
  {
    'type': 'Feature',
    'geometry': {
       'type': 'Point',
       'coordinates':  [ 4.866185,52.359864 ]
    },
    'properties': {
    'Station':'Amsterdam-Vondelpark',
    'type':'City Background'
    }
  },
  {
    'type': 'Feature',
    'geometry': {
       'type': 'Point',
       'coordinates':  [ 4.860299,52.374851 ]
    },
    'properties': {
    'Station':'Amsterdam-Jan van Galenstraat',
    'type':'Street Traffic'
    }
  },
  {
    'type': 'Feature',
    'geometry': {
       'type': 'Point',
       'coordinates':  [ 4.875582,52.385449 ]
    },
    'properties': {
    'Station':'Amsterdam-Haarlemmerweg',
    'type':'Street Traffic'
    }
  },
  {
    'type': 'Feature',
    'geometry': {
       'type': 'Point',
       'coordinates':  [ 4.887904,52.390060 ]
    },
    'properties': {
    'Station':'Amsterdam-Van Diemenstraat',
    'type':'Street Traffic'
    }
  },
  {
    'type': 'Feature',
    'geometry': {
       'type': 'Point',
       'coordinates':  [ 4.870355,52.394126 ]
    },
    'properties': {
    'Station':'Amsterdam-Westerpark',
    'type':'City Background'
    }
  },
  {
    'type': 'Feature',
    'geometry': {
       'type': 'Point',
       'coordinates':  [ 4.845117,52.381797 ]
    },
    'properties': {
    'Station':'Amsterdam-Einsteinweg',
    'type':'Street Traffic'
    }
  },
  {
    'type': 'Feature',
    'geometry': {
       'type': 'Point',
       'coordinates':  [ 4.841014,52.339669 ]
    },
    'properties': {
    'Station':'Amsterdam-A10-West',
    'type':'Street Traffic'
    }
  },
  {
    'type': 'Feature',
    'geometry': {
       'type': 'Point',
       'coordinates':  [ 4.793309,52.367053 ]
    },
    'properties': {
    'Station':'Amsterdam-Ookmeer',
    'type':'City Background'
    }
  },
  {
    'type': 'Feature',
    'geometry': {
       'type': 'Point',
       'coordinates':  [ 4.943648,52.389628 ]
    },
    'properties': {
    'Station':'Amsterdam-Nieuwendammerdijk',
    'type':'City Background'
    }
  },
  {
    'type': 'Feature',
    'geometry': {
       'type': 'Point',
       'coordinates':  [ 4.988346,52.320776 ]
    },
    'properties': {
    'Station':'Amsterdam -Kantershof',
    'type':'City Background'
    }
  }
]
};

 map.on('style.load', function() {
          map.addSource("points", {
            "type": "geojson",
            "data": stations
            });
         
          map.addLayer({
            id: 'points',
           // interactive: true, 
            type: 'symbol',
            source: {  type: 'geojson',
                       data:  stations
                     },
            layout: {
              'icon-image': 'marker-12',
              'icon-allow-overlap': true,
              'icon-size': 1.25,
              "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
              "text-offset": [0, 0.6],
              "text-anchor": "top"
            },
            paint: {"text-size": 10 }
          });
    
  // stations marker popup    
 map.on('click', function (e) {
    // Use featuresAt to get features within a given radius of the click event
    // Use layer option to avoid getting results from other layers
        map.featuresAt(e.point, {layer: 'points', radius: 10, includeGeometry: true}, function (err, features) {
            if (err) throw err;
            // if there are features within the given radius of the click event,
            // fly to the location of the click event
            if (features.length) {
                // Get coordinates from the symbol and center the map on those coordinates
                map.flyTo({center: features[0].geometry.coordinates});
                var featureStation = features[0].properties.Station;
                var featureType = features[0].properties.type;
                var tooltip = new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML('<p>' + featureStation + featureType + '</p>')
                    .addTo(map);
                }
            });
        }); 
        
    // Use the same approach as above to indicate that the symbols are clickable
    // by changing the cursor style to 'pointer'.
 map.on('mousemove', function (e) {
        map.featuresAt(e.point, {layer: 'points', radius: 10}, function (err, features) {
            if (err) throw err;
            map.getCanvas().style.cursor = features.length ? 'pointer' : '';
            });
        });
