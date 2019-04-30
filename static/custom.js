// API call function
fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
    // Converts API response to json
    .then(function(response){
        return response.json();
    })
    // Calls appendData function with json data as parameter
    .then(function(data){
        appendData(data);
    })
    // Displays error if API call is unsuccessful
    .catch( function(err){
        console.log("API fetch was unsuccessful");
        console.log(err)
    })

// Creates dynamic table with json data and appends to dataTable element
function appendData(data) {
    let priceDict = data["bpi"]
    let table = document.getElementById("dataTable")
    // Reverses and loops through dictionary key:value pairs
    let test = Object.keys(priceDict).reverse().forEach(function (key) {
        // rows created dynamically
        let row = table.insertRow(-1);
        // two columns hardcoded until dynamic behavior needed
        let col1 = row.insertCell(0);
        let col2 = row.insertCell(1);
        col1.innerHTML = key;
        col2.innerHTML = priceDict[key];
    });
}
