var hours = [];
for (var i = 0; i <= 23; i++) {
    list.push(i);
}


function filterBy(hour) {

    var filters = ['==', 'hour', hour];
    map.setFilter('earthquake-circles', filters);
    map.setFilter('earthquake-labels', filters);

    // Set the label to the month
    document.getElementById('hour').textContent = hours[hour];

}

d3.json('https://www.mapbox.com/mapbox-gl-js/assets/data/significant-earthquakes-2015.geojson', function(err, data) {
        if (err) throw err;

        // Create an hour property value based on time
        // used to filter against.
        data.features = data.features.map(function(d) {
            d.properties.hour = new Date(d.properties.time).getHour();
            return d;
        });

        map.addSource('earthquakes', {
            'type': 'geojson',
            'data': data
        });

        map.addLayer({
            'id': 'earthquake-circles',
            'type': 'circle',
            'source': 'earthquakes',
            'paint': {
                'circle-color': {
                    property: 'mag',
                    stops: [
                        [6, '#FCA107'],
                        [8, '#7F3121']
                    ]
                },
                'circle-opacity': 0.75,
                'circle-radius': {
                    property: 'mag',
                    stops: [
                        [6, 20],
                        [8, 40]
                    ]
                }
            }
        });

        map.addLayer({
            'id': 'earthquake-labels',
            'type': 'symbol',
            'source': 'earthquakes',
            'layout': {
                'text-field': '{mag}m',
                'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
                'text-size': 12
            },
            'paint': {
                'text-color': 'rgba(0,0,0,0.5)'
            }
        });

        // Set filter to first hour of the day
        // 0 = 12 AM
        filterBy(0);

        document.getElementById('slider').addEventListener('input', function(e) {
            var hour = parseInt(e.target.value, 10);
            filterBy(hour);
        });
    });
