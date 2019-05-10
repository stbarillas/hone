// API call function
fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
    // Converts API response to json
    .then(function(response){
        return response.json();
    })
    // Calls render functions with bci object and days as parameters. Defaults to 31 days
    .then(function(data){
        priceDict = data["bpi"]
        renderTable(priceDict, 31);
        renderChart(priceDict, 31);
    })
    // Displays error if API call is unsuccessful
    .catch( function(err){
        console.log("API fetch was unsuccessful");
        console.log(err)
    })

// Create dynamic table with json data and appends to dataTable element
function renderTable(data, days) {
    let table = document.getElementById("dataTable")
    // Reverses and loops through dictionary key:value pairs
    Object.keys(data).reverse().slice(0,days).forEach(function (key) {
        // rows created dynamically
        let row = table.insertRow(-1);
        // two columns hardcoded until dynamic behavior needed
        let col1 = row.insertCell(0);
        let col2 = row.insertCell(1);
        col1.innerHTML = key;
        col2.innerHTML = data[key];
    });
}

// Radio button functions
function renderData(days) {
    // Uncomment line below to create data when developing in offline mode
    // priceDict = {1:100, 2:101, 3:400, 4:201, 5:150,6:100, 7:101, 8:400, 9:201, 10:150,11:100, 12:101, 13:400, 14:201, 15:150,}
    // Removes all table rows except the header row
    var table = document.getElementById("dataTable");
    //or use :  var table = document.all.tableid;
    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }
    // Renders table with user selected amount of days
    renderTable(priceDict, days);
    // Render chart with user selected amount of days
    renderChart(priceDict, days);
}