/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function generateSeatMap() {

    var seatMap = [
        ['L', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'U', 'U', 'U', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
        ['K', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'U', 'U', 'U', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
        ['J', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'U', 'U', 'U', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
        ['I', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'U', 'U', 'U', 'U', 'U', 'U', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
        [],
        ['H', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'A', 'A', 'A', 'A', 'A'],
        ['G', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'A', 'A', 'A', 'A', 'A'],
        ['F', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'A', 'A', 'A', 'A', 'A'],
        ['E', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'A', 'A', 'A', 'A', 'A'],
        [],
        [],
        ['D', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
        ['C', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
        ['B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
        ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A']
    ];

    var seatMaphtml, tempi, templ;

    seatMaphtml = '';

    for (i = 0; i < seatMap.length; i++) {

        if (seatMap[i].length > 0) {
            seatMaphtml += '<div class="row">';
            seatMaphtml += '<span class="seat seatclassif">' + seatMap[i][0] + '</span>';

            for (j = 1; j < seatMap[i].length; j++) {

                if (seatMap[i][j] === 'A') {
                    tempi = '<input id="seat-' + j + seatMap[i][0] + '"' + ' class="seat-select"' + ' type="checkbox"'
                            + ' value="' + j + seatMap[i][0] + '"' + 'name="seat[]"/>';
                    templ = '<label for="seat-' + j + seatMap[i][0] + '"' + ' class="seat"' + '></label>';
                    seatMaphtml += tempi;
                    seatMaphtml += templ;
                } else if (seatMap[i][j] === 'U') {
                    tempi = '<input id="seat-' + j + seatMap[i][0] + '"' + ' class="seat-select"' + ' disabled = "disabled"'
                            + ' type="checkbox"' + ' value="' + j + seatMap[i][0] + '"' + 'name="seat[]"/>';
                    templ = '<label for="seat-' + j + seatMap[i][0] + '"' + ' class="seat selected"' + '></label>';
                    seatMaphtml += tempi;
                    seatMaphtml += templ;

                } else if (seatMap[i][j] === 'E') {
                    tempi = '<input id="seat-' + j + seatMap[i][0] + '"' + ' class="seat-select"' + ' disabled = "disabled"'
                            + ' type="checkbox"' + ' value="' + j + seatMap[i][0] + '"' + 'name="seat[]"/>';
                    templ = '<label for="seat-' + j + seatMap[i][0] + '"' + ' class="seat seat-select-no-disp"' + '></label>';
                    seatMaphtml += tempi;
                    seatMaphtml += templ;
                }
            }
            seatMaphtml += '</div>';
        } else {
            seatMaphtml += '</br>';
        }
    }

    document.getElementById("seats").innerHTML = seatMaphtml;

}

$(document).ready(function () {
    generateSeatMap();
});







