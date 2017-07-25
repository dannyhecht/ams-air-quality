map.on('load', function() {
  map.addLayer({
    id: 'collisions',
    type: 'circle',
    filter: ['==', 'Hour', 12],
    source: {
      type: 'geojson',
      data: './collisions1601.geojson' // replace this with the url of your own geojson
    },
    paint: {
      'circle-radius': {
        property: 'Casualty',
        stops: [
          [0, 3],
          [5, 15]
        ]
      },
      'circle-color': {
        property: 'Casualty',
        stops: [
          [0, '#2DC4B2'],
          [1, '#3BB3C3'],
          [2, '#669EC4'],
          [3, '#8B88B6'],
          [4, '#A2719B'],
          [5, '#AA5E79']
        ]
      },
      'circle-opacity': 0.8
    }
  }, 'admin-2-boundaries-dispute'); // place the layer beneath this layer in the basemap
});

document.getElementById('slider').addEventListener('input', function(e) {
  // get the current hour as an integer
  var hour = parseInt(e.target.value);
  // map.setFilter(layer-name, filter)
  map.setFilter('collisions', ['==', 'Hour', hour]);

  // converting 0-23 hour to AMPM format
  var ampm = hour >= 12 ? 'PM' : 'AM';
  var hour12 = hour % 12 ? hour % 12 : 12;
  // update text in the UI
  document.getElementById('active-hour').innerText = hour12 + ampm;
});

