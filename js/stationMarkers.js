var stations1 = 'https://github.com/dannyhecht/ams-air-quality/blob/master/data/aqi_monitoring_network.geojson';

        // add markers
        map.on('load', function() {
          map.addSource('stations1', {
            type: 'geojson',
            data: './data/aqi_monitoring_network.geojson'
          });   


          map.addLayer({
            id: 'point',
            type: 'symbol',
            source: stations1,
            layout: {
              'icon-image': 'marker-15'
            },
            paint: { }
          });
        });
