var url = 'https://github.com/dannyhecht/ams-air-quality/blob/master/data/ams_stadhouderskade_5-01-2017.geojson';

map.on('load', function() {
 var filterHour = ['in', 'DateTime', '12']; 
 var filterDay = ['!=', 'Day', 'Bob'];
 
 map.getSource('pollutants').setData(url);
 map.addSource('pollutants', {
            type: 'geojson',
            data: url
          });   
 map.addLayer({
                id: 'pollutants',
                type: 'circle',
                filter: ['all', filterHour, filterDay],
                source: 'pollutants',
                paint: {
                  'circle-radius': {
                    property: 'Concentration',
                    stops: [
                      [0, 3],
                      [5, 15] ]    
                  },
                  'circle-color': {
                    property: 'Concentration',
                    stops: [
                      [0, '#2DC4B2'],
                      [1, '#3BB3C3'],
                      [2, '#669EC4'],
                      [3, '#8B88B6'],
                      [4, '#A2719B'],
                      [5, '#AA5E79'] ]
                  },
                  'circle-opacity': 0.8

    }, 'admin-2-boundaries-dispute'}); // place the layer beneath this layer in the basemap

 }); 

document.getElementById('slider').addEventListener('input', function(e) {
                  // get the current hour as an integer 

                  var hour = parseInt(e.target.value);
                  //hour = hour < 10 ? '0' + '' + hour + ':00:00+02:00': hour;
                  // map.setFilter(layer-name, filter)
                  filterHour = ['in', 'DateTime', hour];
                  map.setFilter('pollutants', ['all', filterHour, filterDay]); 

                  // converting 0-23 hour to AMPM format
                  var ampm = hour >= 12 ? 'PM' : 'AM';
                  var hour12 = hour % 12 ? hour % 12 : 12;
                  // update text in the UI
                  document.getElementById('active-hour').innerText = hour12 + ampm;
});

document.getElementById('filters').addEventListener('change', function(e) {
                  var day = e.target.value;
                  if (day === 'all') {
                    // `null` would not work for combining filters
                    filterDay = ['!=', 'Day', 'Bob'];
                  } else if (day === 'weekday') {
                    filterDay = ['!in', 'Day', 'Sat', 'Sun'];
                  } else if (day === 'weekend') {
                    filterDay = ['in', 'Day', 'Sat', 'Sun'];
                  } else {
                    console.log('error');
                  }
                  map.setFilter('pollutants', filterHour, filterDay);
});
        
  

/*
map.on('load', function() {
  map.addLayer({
    id: 'collisions',
    type: 'circle',
    filter: ['==', 'Hour', 12],
    source: {
      type: 'geojson',
      data: 'data/stadhouderskade_5-01-2017.geojson' 
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

document.getElementById('filters').addEventListener('change', function(e) {
  var day = e.target.value;
  var filterDay;
  if (day === 'all') {
    filterDay = null;
  } else if (day === 'weekday') {
    filterDay = ['!in', 'Day', 'Sat', 'Sun'];
  } else if (day === 'weekend') {
    filterDay = ['in', 'Day', 'Sat', 'Sun'];
  } else {
    console.log('error');
  }
  map.setFilter('collisions', filterDay);
});
*/





