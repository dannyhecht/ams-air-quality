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
