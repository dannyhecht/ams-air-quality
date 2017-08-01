var stations1 = 'data/aqi_monitoring_network.geojson';

        // add markers
        map.on('load', function() {
          map.addSource('stations1', {
            type: 'geojson',
            data: 'data/aqi_monitoring_network.geojson'
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
