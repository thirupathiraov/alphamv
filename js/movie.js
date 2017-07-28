/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function scrollNav() {
    $('.padded a').click(function () {
        //Toggle Class
        $(".active").removeClass("active");
        $(this).closest('li').addClass("active");
        return false;
    });

}
scrollNav();

//https://codepen.io/mattsince87/pen/exByn


