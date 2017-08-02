/* CSV of all stations in Amsterdam for concentrations of different pollutants for each hour

Filter - 
Pollutant = NO
Day = 05-01-2017
Hour = 12
*/

var data_5-01-2017 =  '../data/ams_5-01-2017.csv';

var filters = {
  'Pollutants' : ['NO2', 'NO','PM25', 'PM10'] };

function filterByID(item) {
  if (item.id) {
    return true;
    
function filterItems(query) {
    return station.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }
    

function datafilter(d){
var poll = document.getElementById("pollutant");
var pollutant = poll.options[poll.selectedIndex].value;
data = data.filter(function(d) { return d.pollutant  == poll;});
return data;}    
    
d3.csv(data_5-01-2017, function(csv) {
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

