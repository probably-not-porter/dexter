/*
    Dexter - Functional Gen 1 Dex
    Porter Libby

    Search functions - control numerical search for dex entries
*/

$( document ).ready(function() {
    // each event corrosponds to a digit
    document.getElementById('button_0').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '0';
            check_search(); // check to see if search is 3 digits long
        }
    });
    
    document.getElementById('button_1').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '1';
            check_search(); // check to see if search is 3 digits long
        }
    });
    
    document.getElementById('button_2').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '2';
            check_search(); // check to see if search is 3 digits long
        }
    });
    
    document.getElementById('button_3').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '3';
            check_search(); // check to see if search is 3 digits long
        }
    });
    
    document.getElementById('button_4').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '4';
            check_search(); // check to see if search is 3 digits long
        }
    });
    
    document.getElementById('button_5').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '5';
            check_search(); // check to see if search is 3 digits long
        }
    });
    
    document.getElementById('button_6').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '6';
            check_search(); // check to see if search is 3 digits long
        }
    });
    
    document.getElementById('button_7').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '7';
            check_search(); // check to see if search is 3 digits long
        }
    });
    
    document.getElementById('button_8').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '8';
            check_search(); // check to see if search is 3 digits long
        }
    });
    
    document.getElementById('button_9').addEventListener('click', function (event) {
        if (search_block == false){
            document.getElementById("search").innerText += '9';
            check_search(); // check to see if search is 3 digits long
        }
    });
});



function check_search(){ // checks to see if search is complete 3-digit (001, 121, 032)
    let search = document.getElementById("search").innerText;
    if (search.length == DEX_COUNT.toString().length){
        if (parseInt(search) > DEX_COUNT || parseInt(search) < 1){
            document.getElementById("search").innerText = "ERR" // if pokemon does not exist, display ERR
        }
        else{
            load_by_num(parseInt(search)); // load search integer (dex num)
        }
        setTimeout(function(){
            document.getElementById("search").innerText = "";
        }, 500);
    }
}