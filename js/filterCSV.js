var stations =  ['ams-air-quality/data/ams-stadhouderskade_5-01-2017_5-12-2017.csv', 'ams-air-quality/data/ams-stadhouderskade_5-01-2017.csv'];

var filters = {
  'Pollutants' : ['NO2', 'NO','PM25', 'PM10'] };

function filterByID(item) {
  if (item.id) {
    return true;
    
function filterItems(query) {
  for (var station in stations) {
    return station.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }
}
    

for (var station in stations) {
    d3.csv(station, function(csv) {
        csv = csv.filter(function(row) {
            // run through all the filters, returning a boolean
            return ['Pollutants'].reduce(function(pass, column) {
                return pass && (
                    // pass if no filter is set
                    !filters[column] ||
                        // pass if the row's value is equal to the filter
                        // (i.e. the filter is set to a string)
                        row[column] === filters[column] ||
                        // pass if the row's value is in an array of filter values
                        filters[column].indexOf(row[column]) >= 0
                    );
            }, true);
        })
    });
}
