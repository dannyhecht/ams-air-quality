/*
var url = '../data/ams_vondelpark_5-01-2017.geojson';

    map.on('load', function() {
     var filterHour = ['==', 'Hour', 12]; 
     var filterDay = ['!=', 'Day', 'Bob'];
     var filterPollutant = ['==', 'Pollutant', 'NO2'];

     map.getSource('pollutants').setData(url);
     map.addSource('pollutants', {
                type: 'geojson',
                data: '../data/ams_vondelpark_5-01-2017.geojson'
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
                          [150, 15] ]    
                      },
                      'circle-color': {
                        property: 'Concentration',
                        stops: [
                          [0, '#2DC4B2'],
                          [25, '#3BB3C3'],
                          [75, '#669EC4'],
                          [100, '#8B88B6'],
                          [125, '#A2719B'],
                          [150, '#AA5E79'] ]
                      },
                      'circle-opacity': 0.8

        }, 'admin-2-boundaries-dispute'}); // place the layer beneath this layer in the basemap

     }); 

    document.getElementById('slider').addEventListener('input', function(e) {
                      // get the current hour as an integer 

                      var hour = parseInt(e.target.value); //string argument
                      //hour = hour < 10 ? '0' + '' + hour + ':00:00+02:00': hour;
                      // map.setFilter(layer-name, filter)
                      filterHour = ['==', 'Hour', hour];
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
                      map.setFilter('pollutants', filterHour, filterDay, filterPollutant);
    });   

*/


map.on('load', function() {
  map.addLayer({
    id: 'collisions',
    type: 'circle',
    filter: ['==', 'Hour', 12],
    source: {
      type: 'geojson',
      data: 'https://embed.github.com/view/geojson/dannyhecht/ams-air-quality/data/ams_vondelpark_5-01-2017.geojson' 
    },
    paint: {
      'circle-radius': {
        property: 'Concentration',
        stops: [
          [0, 3],
          [150, 15]
        ]
      },
      'circle-color': {
        property: 'Concentration',
        stops: [
          [0, '#2DC4B2'],
          [25, '#3BB3C3'],
          [75, '#669EC4'],
          [100, '#8B88B6'],
          [125, '#A2719B'],
          [150, '#AA5E79']
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




