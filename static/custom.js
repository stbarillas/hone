// API call function
fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

var table = "";
var rows = 2;
var columns = 3;
for(var r = 0; r < rows; r++){
    table += "<tr>";
    for(var c = 0; c < columns; c++){
        table = "<td>" + c + "</td>";
    }
    table += "</tr>";
}
