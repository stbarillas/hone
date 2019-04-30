// API call function
fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
    // Converts API response to json
    .then(function(response){
        return response.json();
    })
    // Calls appendData function with json data as parameter
    .then(function(data){
        appendData(data);
        return data
    })
    .then(function(data){
        renderChart(data);
    })
    // Displays error if API call is unsuccessful
    .catch( function(err){
        console.log("API fetch was unsuccessful");
        console.log(err)
    })

// Create dynamic table with json data and appends to dataTable element
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

// // Chart Code
// var Chart = require('node_modules/chart.js/dist/Chart.js');
// var ctx = document.getElementById('dataChart').getContext('2d');
// var dataChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });