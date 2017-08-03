/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function createCharts01() {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages': ['bar', 'gauge']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawRevenuePerTheatreChart);

    google.charts.setOnLoadCallback(drawMovieBookingChart);

    //google.charts.setOnLoadCallback(drawMultSeries);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawRevenuePerTheatreChart() {

        var data = google.visualization.arrayToDataTable([
            ['Theatre', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            ['Asian Lakshmikala Cinepride: Moosapet', 15000, 18000, 14400, 15000, 22500, 27000, 30000],
            ['Asian GPR Multiplex: Kukatpally', 15000, 13500, 12150, 13500, 18000, 21000, 27000],
            ['Asian CineSquare Multiplex: Uppal', 7500, 10500, 14700, 15000, 18000, 24000, 25500],
            ['Asian M Cube Mall: Attapur', 18000, 21600, 25500, 19500, 25500, 25500, 24000]
        ]
        );

        var options = {
            chart: {
                title: 'Revenue By Theatre',
                subtitle: '10:00 AM Show For the Week of 6th July 2017',
            },
            bars: 'vertical', // Required for Material Bar Charts.
            hAxis: {format: 'decimal'},
            height: data.getNumberOfRows() * 80,
            width: '100%'
        };
        var chart = new google.charts.Bar(document.getElementById('chart01'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }

    function drawMovieBookingChart() {

        var data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['10:00 AM', 25],
            ['2:00 PM', 40],
            ['6:00 PM', 70],
            ['10:00 PM', 50]
        ]);

        var options = {
            width: '100%', height: 120,
            redFrom: 0, redTo: 25,
            yellowFrom: 26, yellowTo: 50,
            greenFrom: 81, greenTo: 100,
            minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart02'));

        chart.draw(data, options);

    }

   $(window).resize(function () {
        /*drawRevenuePerTheatreChart();*/
        drawMovieBookingChart();
    });

}

$(document).ready(function () {
    createCharts01();
});
